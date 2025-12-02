# Development Setup

## Prerequisites
Ensure you have [Nix](https://nixos.org/download.html) installed on your system.

## Setting Up the Development Environment

1.  **Install Nix** (if not already installed):
    ```sh
    sh <(curl -L https://nixos.org/nix/install)
    ```

2.  **Enable Flakes:**
    Add the following to your Nix configuration file (`~/.config/nix/nix.conf` or `/etc/nix/nix.conf`):
    ```
    experimental-features = nix-command flakes
    ```

3.  **Enter the development shell**:
    ```sh
    nix develop --impure
    ```
    This command will download all the required dependencies and place you in a shell where you can run the build and test commands.

## Building the Android App

1.  **Install dependencies**:
    ```sh
    make install
    ```
    or
    ```sh
    yarn install
    ```

2.  **Build the APK for release**:
    ```sh
    make apk-release
    ```
    or

    ```sh
    cd android && ./gradlew assembleRelease
    ```

This will generate the final APK in the `android/app/build/outputs/apk/release/` directory.

## Launching android emulator

   ```sh
   emulator -avd <your_avd_name>
   ```

   Then you can run the app:

   ```
   yarn android
   ```
## iOS Build
To build the iOS app, you will need to set the `APPLE_TEAM_ID` environment variable to your Apple Developer Team ID.
