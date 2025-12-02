{ pkgs }:

with pkgs;

let
  isCI = builtins.getEnv "CI" == "true";

  basePackages = [
    gnumake
    nodejs-18_x
    yarn
    jdk
    android-sdk
  ];

  devPackages = [
    google-chrome
  ];

in
with pkgs;

# Configure your development environment.
devshell.mkShell {
  name = (builtins.fromJSON (builtins.readFile ./package.json)).name;
  motd = ''
    Entered the ${(builtins.fromJSON (builtins.readFile ./package.json)).name} app ${if isCI then "CI" else "dev"} environment.
  '';
  env = [
    {
      name = "JAVA_HOME";
      value = jdk.home;
    }
  ] ++ (if !isCI then [
    (if pkgs.stdenv.isDarwin then {
      name = "ANDROID_HOME";
      value = "${builtins.getEnv "HOME"}/Library/Android/sdk";
    } else {
      name = "ANDROID_HOME";
      value = "${builtins.getEnv "HOME"}/Android/sdk";
    })
    (if pkgs.stdenv.isDarwin then {
      name = "ANDROID_SDK_ROOT";
      value = "${builtins.getEnv "HOME"}/Library/Android/sdk";
    } else {
      name = "ANDROID_SDK_ROOT";
      value = "${builtins.getEnv "HOME"}/Android/sdk";
    })
    {
      name = "CHROME_EXECUTABLE";
      value = "${google-chrome}/bin/google-chrome-stable";

    }
  ] else [
    {
      name = "ANDROID_HOME";
      value = "${android-sdk}/share/android-sdk";
    }
    {
      name = "ANDROID_SDK_ROOT";
      value = "${android-sdk}/share/android-sdk";
    }
  ]);

  packages =  basePackages ++ (if isCI then [] else devPackages);
}
