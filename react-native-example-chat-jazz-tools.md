Directory structure:
└── chat-rn/
    ├── README.md
    ├── app.json
    ├── babel.config.js
    ├── CHANGELOG.md
    ├── Gemfile
    ├── index.js
    ├── metro.config.js
    ├── package.json
    ├── tsconfig.json
    ├── .eslintrc.js
    ├── .gitkeep
    ├── .prettierrc.js
    ├── .watchmanconfig
    ├── android/
    │   ├── gradle.properties
    │   ├── gradlew
    │   ├── gradlew.bat
    │   ├── app/
    │   │   ├── debug.keystore
    │   │   ├── proguard-rules.pro
    │   │   └── src/
    │   │       ├── debug/
    │   │       │   └── AndroidManifest.xml
    │   │       └── main/
    │   │           ├── AndroidManifest.xml
    │   │           ├── java/
    │   │           │   └── com/
    │   │           │       └── chatrn/
    │   │           │           ├── MainActivity.kt
    │   │           │           └── MainApplication.kt
    │   │           └── res/
    │   │               ├── drawable/
    │   │               │   └── rn_edit_text_material.xml
    │   │               └── values/
    │   │                   ├── strings.xml
    │   │                   └── styles.xml
    │   └── gradle/
    │       └── wrapper/
    │           └── gradle-wrapper.properties
    ├── ios/
    │   ├── Podfile
    │   ├── .xcode.env
    │   ├── ChatRN/
    │   │   ├── AppDelegate.swift
    │   │   ├── Info.plist
    │   │   ├── LaunchScreen.storyboard
    │   │   ├── PrivacyInfo.xcprivacy
    │   │   └── Images.xcassets/
    │   │       ├── Contents.json
    │   │       └── AppIcon.appiconset/
    │   │           └── Contents.json
    │   └── ChatRNTests/
    │       ├── ChatRNTests.m
    │       └── Info.plist
    └── src/
        ├── apiKey.ts
        ├── App.tsx
        ├── chat.tsx
        ├── invite.tsx
        ├── polyfills.ts
        ├── schema.ts
        └── theme.ts


Files Content:

================================================
FILE: examples/chat-rn/README.md
================================================
# 🎷 Jazz + React Native + Demo Auth

## 🚀 How to Run

### 1. Inside the Workspace Root

First, install dependencies for the project:

```bash
pnpm i
```

### 2. Inside the `examples/chat-rn` Directory

Next, navigate to the specific example project and run the following commands:

```bash
pnpm pods
pnpm ios
```

This will set up and launch the app on iOS. For Android, you can skip `pnpm pods` and replace the last command with `pnpm android`.

## iOS Permissions

You'll need to make sure that the appropriate entry is added to `Info.plist` for iOS (NSPhotoLibraryUsageDescription) in order for the app to access the user's photo library.

## Creation

This was created using the following command:

```bash
pnpx @react-native-community/cli init chat-rn --version 0.76.9 --install-pods true --skip-git-init true --package-name com.chatrn --directory chat-rn
```

Then change package name in `package.json`, and begin build instructions above.



================================================
FILE: examples/chat-rn/app.json
================================================
{
  "name": "ChatRN",
  "displayName": "ChatRN",
  "android": {
    "package": "tools.jazz.chatrn"
  },
  "ios": {
    "bundleIdentifier": "tools.jazz.chatrn"
  }
}



================================================
FILE: examples/chat-rn/babel.config.js
================================================
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: ["@babel/plugin-transform-export-namespace-from"],
};



================================================
FILE: examples/chat-rn/CHANGELOG.md
================================================
# chat-rn

## 1.0.140

### Patch Changes

- Updated dependencies [57fb69f]
- Updated dependencies [048ac1d]
  - cojson@0.14.22
  - jazz-tools@0.14.22
  - cojson-transport-ws@0.14.22
  - jazz-react-native@0.14.22

## 1.0.139

### Patch Changes

- Updated dependencies [e7e505e]
- Updated dependencies [c3d8779]
- Updated dependencies [13b57aa]
- Updated dependencies [5662faa]
- Updated dependencies [2116a59]
  - jazz-tools@0.14.21
  - cojson@0.14.21
  - jazz-react-native@0.14.21
  - cojson-transport-ws@0.14.21

## 1.0.138

### Patch Changes

- Updated dependencies [6f72419]
- Updated dependencies [04b20c2]
  - jazz-tools@0.14.20
  - jazz-react-native@0.14.20
  - cojson@0.14.20
  - cojson-transport-ws@0.14.20

## 1.0.137

### Patch Changes

- Updated dependencies [061ec99]
  - jazz-react-native@0.14.19
  - cojson@0.14.19
  - cojson-transport-ws@0.14.19
  - jazz-tools@0.14.19

## 1.0.136

### Patch Changes

- Updated dependencies [4b950bc]
- Updated dependencies [0d5ee3e]
- Updated dependencies [d6d9c0a]
- Updated dependencies [c559054]
  - jazz-tools@0.14.18
  - cojson@0.14.18
  - jazz-react-native@0.14.18
  - cojson-transport-ws@0.14.18

## 1.0.135

### Patch Changes

- Updated dependencies [e512df4]
  - jazz-tools@0.14.17
  - jazz-react-native@0.14.17

## 1.0.134

### Patch Changes

- Updated dependencies [5e253cc]
  - cojson@0.14.16
  - cojson-transport-ws@0.14.16
  - jazz-react-native@0.14.16
  - jazz-tools@0.14.16

## 1.0.133

### Patch Changes

- Updated dependencies [23daa7c]
  - cojson@0.14.15
  - jazz-react-native@0.14.15
  - cojson-transport-ws@0.14.15
  - jazz-tools@0.14.15

## 1.0.132

### Patch Changes

- Updated dependencies [e32a1f7]
  - jazz-tools@0.14.14
  - jazz-react-native@0.14.14

## 1.0.131

### Patch Changes

- jazz-react-native@0.14.13

## 1.0.130

### Patch Changes

- jazz-react-native@0.14.12

## 1.0.129

### Patch Changes

- Updated dependencies [98d697f]
  - jazz-react-native@0.14.11

## 1.0.128

### Patch Changes

- Updated dependencies [dc746a2]
- Updated dependencies [f869d9a]
- Updated dependencies [3fe6832]
  - jazz-react-native@0.14.10
  - jazz-tools@0.14.10

## 1.0.127

### Patch Changes

- Updated dependencies [22c2600]
  - jazz-tools@0.14.9
  - jazz-react-native@0.14.9

## 1.0.126

### Patch Changes

- Updated dependencies [637ae13]
  - jazz-tools@0.14.8
  - jazz-react-native@0.14.8

## 1.0.125

### Patch Changes

- Updated dependencies [365b0ea]
  - jazz-tools@0.14.7
  - jazz-react-native@0.14.7

## 1.0.124

### Patch Changes

- Updated dependencies [9d6d9fe]
- Updated dependencies [9d6d9fe]
  - jazz-tools@0.14.6
  - jazz-react-native@0.14.6

## 1.0.123

### Patch Changes

- Updated dependencies [91cbb2f]
- Updated dependencies [20b3d88]
  - jazz-tools@0.14.5
  - jazz-react-native@0.14.5

## 1.0.122

### Patch Changes

- Updated dependencies [011af55]
  - jazz-tools@0.14.4
  - jazz-react-native@0.14.4

## 1.0.121

### Patch Changes

- Updated dependencies [3d1027f]
- Updated dependencies [c240eed]
  - jazz-tools@0.14.2
  - jazz-react-native@0.14.2

## 1.0.120

### Patch Changes

- Updated dependencies [c8b33ad]
- Updated dependencies [cdfc105]
  - cojson@0.14.1
  - jazz-tools@0.14.1
  - cojson-transport-ws@0.14.1
  - jazz-react-native@0.14.1

## 1.0.119

### Patch Changes

- Updated dependencies [5835ed1]
- Updated dependencies [5835ed1]
  - cojson@0.14.0
  - jazz-tools@0.14.0
  - cojson-transport-ws@0.14.0
  - jazz-react-native@0.14.0

## 1.0.118

### Patch Changes

- jazz-react-native@0.13.32

## 1.0.117

### Patch Changes

- Updated dependencies [e5b170f]
- Updated dependencies [d63716a]
- Updated dependencies [d5edad7]
  - jazz-tools@0.13.31
  - cojson@0.13.31
  - jazz-react-native@0.13.31
  - cojson-transport-ws@0.13.31

## 1.0.116

### Patch Changes

- Updated dependencies [07dd2c5]
  - cojson@0.13.30
  - cojson-transport-ws@0.13.30
  - jazz-react-native@0.13.30
  - jazz-tools@0.13.30

## 1.0.115

### Patch Changes

- Updated dependencies [eef1a5d]
- Updated dependencies [191ae38]
- Updated dependencies [daee7b9]
  - cojson@0.13.29
  - jazz-react-native@0.13.29
  - cojson-transport-ws@0.13.29
  - jazz-tools@0.13.29

## 1.0.114

### Patch Changes

- Updated dependencies [e7ccb2c]
- Updated dependencies [422dbc4]
  - cojson@0.13.28
  - cojson-transport-ws@0.13.28
  - jazz-react-native@0.13.28
  - jazz-tools@0.13.28

## 1.0.113

### Patch Changes

- Updated dependencies [6357052]
  - cojson@0.13.27
  - cojson-transport-ws@0.13.27
  - jazz-react-native@0.13.27
  - jazz-tools@0.13.27

## 1.0.112

### Patch Changes

- Updated dependencies [ff846d9]
  - jazz-tools@0.13.26
  - jazz-react-native@0.13.26

## 1.0.111

### Patch Changes

- Updated dependencies [a846e07]
  - cojson@0.13.25
  - cojson-transport-ws@0.13.25
  - jazz-react-native@0.13.25
  - jazz-tools@0.13.25

## 1.0.110

### Patch Changes

- Updated dependencies [6b781cf]
- Updated dependencies [02a240c]
  - cojson@0.13.23
  - jazz-tools@0.13.23
  - cojson-transport-ws@0.13.23
  - jazz-react-native@0.13.23

## 1.0.109

### Patch Changes

- jazz-react-native@0.13.22

## 1.0.108

### Patch Changes

- Updated dependencies [e14e61f]
  - cojson@0.13.21
  - cojson-transport-ws@0.13.21
  - jazz-react-native@0.13.21
  - jazz-tools@0.13.21

## 1.0.107

### Patch Changes

- Updated dependencies [adfc9a6]
- Updated dependencies [1389207]
- Updated dependencies [d6e143e]
- Updated dependencies [439f0fe]
- Updated dependencies [3e6229d]
  - cojson@0.13.20
  - jazz-tools@0.13.20
  - jazz-react-native@0.13.20
  - cojson-transport-ws@0.13.20

## 1.0.106

### Patch Changes

- Updated dependencies [80530a4]
  - jazz-tools@0.13.19
  - jazz-react-native@0.13.19

## 1.0.105

### Patch Changes

- Updated dependencies [9089252]
- Updated dependencies [b470f63]
- Updated dependencies [761759c]
- Updated dependencies [66373ba]
- Updated dependencies [f24cad1]
  - cojson@0.13.18
  - jazz-tools@0.13.18
  - cojson-transport-ws@0.13.18
  - jazz-react-native@0.13.18

## 1.0.104

### Patch Changes

- Updated dependencies [9fb98e2]
- Updated dependencies [0b89fad]
  - cojson@0.13.17
  - cojson-transport-ws@0.13.17
  - jazz-react-native@0.13.17
  - jazz-tools@0.13.17

## 1.0.103

### Patch Changes

- Updated dependencies [c6fb8dc]
  - cojson@0.13.16
  - cojson-transport-ws@0.13.16
  - jazz-react-native@0.13.16
  - jazz-tools@0.13.16

## 1.0.102

### Patch Changes

- Updated dependencies [c712ef2]
  - cojson@0.13.15
  - cojson-transport-ws@0.13.15
  - jazz-react-native@0.13.15
  - jazz-tools@0.13.15

## 1.0.101

### Patch Changes

- Updated dependencies [5c2c7d4]
  - cojson@0.13.14
  - cojson-transport-ws@0.13.14
  - jazz-react-native@0.13.14
  - jazz-tools@0.13.14

## 1.0.100

### Patch Changes

- Updated dependencies [ec9cb40]
  - cojson@0.13.13
  - cojson-transport-ws@0.13.13
  - jazz-react-native@0.13.13
  - jazz-tools@0.13.13

## 1.0.99

### Patch Changes

- Updated dependencies [4547525]
- Updated dependencies [65719f2]
  - jazz-tools@0.13.12
  - cojson@0.13.12
  - jazz-react-native@0.13.12
  - cojson-transport-ws@0.13.12

## 1.0.98

### Patch Changes

- Updated dependencies [17273a6]
- Updated dependencies [3396ed4]
- Updated dependencies [17273a6]
- Updated dependencies [267ea4c]
  - cojson@0.13.11
  - jazz-tools@0.13.11
  - cojson-transport-ws@0.13.11
  - jazz-react-native@0.13.11

## 1.0.97

### Patch Changes

- Updated dependencies [f837cfe]
  - cojson@0.13.10
  - cojson-transport-ws@0.13.10
  - jazz-react-native@0.13.10
  - jazz-tools@0.13.10

## 1.0.96

### Patch Changes

- Updated dependencies [a6cf01f]
  - jazz-tools@0.13.9
  - jazz-react-native@0.13.9

## 1.0.95

### Patch Changes

- Updated dependencies [bc3d7bb]
- Updated dependencies [4e9aae1]
- Updated dependencies [21c935c]
- Updated dependencies [aa1c80e]
- Updated dependencies [13074be]
  - jazz-tools@0.13.7
  - cojson@0.13.7
  - jazz-react-native@0.13.7
  - cojson-transport-ws@0.13.7

## 1.0.94

### Patch Changes

- Updated dependencies [e090b39]
- Updated dependencies [fe6f561]
  - cojson@0.13.5
  - jazz-tools@0.13.5
  - cojson-transport-ws@0.13.5
  - jazz-react-native@0.13.5

## 1.0.93

### Patch Changes

- Updated dependencies [3129982]
  - jazz-tools@0.13.4
  - jazz-react-native@0.13.4

## 1.0.92

### Patch Changes

- Updated dependencies [12f8bfa]
- Updated dependencies [b19cab7]
- Updated dependencies [bd57177]
  - jazz-tools@0.13.3
  - cojson-transport-ws@0.13.3
  - jazz-react-native@0.13.3

## 1.0.91

### Patch Changes

- Updated dependencies [c551839]
  - cojson@0.13.2
  - cojson-transport-ws@0.13.2
  - jazz-react-native@0.13.2
  - jazz-tools@0.13.2

## 1.0.90

### Patch Changes

- Updated dependencies [63a7aa0]
  - jazz-react-native@0.13.1

## 1.0.89

### Patch Changes

- Updated dependencies [a013538]
- Updated dependencies [bce3bcc]
- Updated dependencies [afd1374]
- Updated dependencies [bce3bcc]
  - cojson@0.13.0
  - jazz-react-native@0.13.0
  - jazz-tools@0.13.0
  - cojson-transport-ws@0.13.0



================================================
FILE: examples/chat-rn/Gemfile
================================================
source 'https://rubygems.org'

# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version
ruby ">= 2.6.10"

# Exclude problematic versions of cocoapods and activesupport that causes build failures.
gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'
gem 'xcodeproj', '< 1.26.0'
gem 'concurrent-ruby', '< 1.3.4'
gem "bigdecimal", "~> 3.1"



================================================
FILE: examples/chat-rn/index.js
================================================
import "./src/polyfills";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/App";

AppRegistry.registerComponent(appName, () => App);



================================================
FILE: examples/chat-rn/metro.config.js
================================================
const path = require("path");
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

// Custom resolver to handle the problematic dynamic import
const customResolver = (context, moduleName, platform) => {
  if (moduleName.includes("@bam.tech/react-native-image-resizer")) {
    const packagePath = path.resolve(
      workspaceRoot,
      "node_modules/@bam.tech/react-native-image-resizer",
    );

    // Always point to the actual file location
    return {
      type: "sourceFile",
      filePath: path.join(packagePath, "lib/module/index.js"),
    };
  }

  // First try the symlinks resolver
  const symlinkResolver = MetroSymlinksResolver();
  try {
    const result = symlinkResolver(context, moduleName, platform);
    if (result) {
      return result;
    }
  } catch (e) {
    // Continue to fallback
  }

  // Fall back to default resolution
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = makeMetroConfig({
  projectRoot,
  watchFolders: [
    path.resolve(workspaceRoot, "node_modules"),
    path.resolve(workspaceRoot, "packages"),
  ],
  resolver: {
    resolveRequest: customResolver,
    nodeModulesPaths: [
      path.resolve(projectRoot, "node_modules"),
      path.resolve(workspaceRoot, "node_modules"),
    ],
    sourceExts: ["mjs", "js", "json", "ts", "tsx"],
    unstable_enableSymlinks: true,
  },
});



================================================
FILE: examples/chat-rn/package.json
================================================
{
  "name": "chat-rn",
  "private": true,
  "main": "index.js",
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "pods": "pod-install"
  },
  "dependencies": {
    "@azure/core-asynciterator-polyfill": "^1.0.2",
    "@bacons/text-decoder": "0.0.0",
    "@bam.tech/react-native-image-resizer": "^3.0.11",
    "@op-engineering/op-sqlite": "14.1.4",
    "@react-native-clipboard/clipboard": "1.16.3",
    "@react-native-community/netinfo": "11.4.1",
    "@react-navigation/native": "7.1.14",
    "@react-navigation/native-stack": "7.3.19",
    "expo-image-manipulator": "^14.0.7",
    "jazz-tools": "workspace:*",
    "react": "catalog:rn",
    "react-native": "catalog:rn",
    "react-native-get-random-values": "^1.11.0",
    "react-native-image-picker": "^8.2.1",
    "react-native-mmkv": "3.3.1",
    "react-native-safe-area-context": "5.5.0",
    "react-native-screens": "4.18.0",
    "readable-stream": "4.7.0"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@babel/plugin-transform-export-namespace-from": "^7.27.1",
    "@babel/preset-env": "^7.25.3",
    "@babel/runtime": "^7.25.0",
    "@react-native-community/cli": "catalog:rn",
    "@react-native-community/cli-platform-android": "catalog:rn",
    "@react-native-community/cli-platform-ios": "catalog:rn",
    "@react-native/babel-preset": "catalog:rn",
    "@react-native/eslint-config": "catalog:rn",
    "@react-native/metro-config": "catalog:rn",
    "@react-native/typescript-config": "catalog:rn",
    "@rnx-kit/metro-config": "^2.0.1",
    "@rnx-kit/metro-resolver-symlinks": "^0.2.5",
    "@types/react": "catalog:rn",
    "eslint": "^8.19.0",
    "pod-install": "^0.3.5",
    "prettier": "2.8.8",
    "typescript": "5.6.2"
  },
  "engines": {
    "node": ">=18"
  }
}



================================================
FILE: examples/chat-rn/tsconfig.json
================================================
{
  "extends": "@react-native/typescript-config/tsconfig.json"
}



================================================
FILE: examples/chat-rn/.eslintrc.js
================================================
module.exports = {
  root: true,
  extends: ["@react-native", "plugin:prettier/recommended"],
  plugins: ["prettier"],
};



================================================
FILE: examples/chat-rn/.gitkeep
================================================
ios
android


================================================
FILE: examples/chat-rn/.prettierrc.js
================================================
module.exports = {
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: false,
  trailingComma: "all",
};



================================================
FILE: examples/chat-rn/.watchmanconfig
================================================
{}



================================================
FILE: examples/chat-rn/android/gradle.properties
================================================
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:
# Gradle settings configured through the IDE *will override*
# any settings specified in this file.

# For more details on how to configure your build environment visit
# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.
# The setting is particularly useful for tweaking memory settings.
# Default value: -Xmx512m -XX:MaxMetaspaceSize=256m
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m

# When configured, Gradle will run in incubating parallel mode.
# This option should only be used with decoupled projects. More details, visit
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
# org.gradle.parallel=true

# AndroidX package structure to make it clearer which packages are bundled with the
# Android operating system, and which are packaged with your app's APK
# https://developer.android.com/topic/libraries/support-library/androidx-rn
android.useAndroidX=true

# Use this property to specify which architecture you want to build.
# You can also override it from the CLI using
# ./gradlew <task> -PreactNativeArchitectures=x86_64
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64

# Use this property to enable support to the new architecture.
# This will allow you to use TurboModules and the Fabric render in
# your application. You should enable this flag either if you want
# to write custom TurboModules/Fabric components OR use libraries that
# are providing them.
newArchEnabled=true

# Use this property to enable or disable the Hermes JS engine.
# If set to false, you will be using JSC instead.
hermesEnabled=true



================================================
FILE: examples/chat-rn/android/gradlew
================================================
#!/bin/sh

#
# Copyright © 2015-2021 the original authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# SPDX-License-Identifier: Apache-2.0
#

##############################################################################
#
#   Gradle start up script for POSIX generated by Gradle.
#
#   Important for running:
#
#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
#       noncompliant, but you have some other compliant shell such as ksh or
#       bash, then to run this script, type that shell name before the whole
#       command line, like:
#
#           ksh Gradle
#
#       Busybox and similar reduced shells will NOT work, because this script
#       requires all of these POSIX shell features:
#         * functions;
#         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,
#           «${var#prefix}», «${var%suffix}», and «$( cmd )»;
#         * compound commands having a testable exit status, especially «case»;
#         * various built-in commands including «command», «set», and «ulimit».
#
#   Important for patching:
#
#   (2) This script targets any POSIX shell, so it avoids extensions provided
#       by Bash, Ksh, etc; in particular arrays are avoided.
#
#       The "traditional" practice of packing multiple parameters into a
#       space-separated string is a well documented source of bugs and security
#       problems, so this is (mostly) avoided, by progressively accumulating
#       options in "$@", and eventually passing that to Java.
#
#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
#       see the in-line comments for details.
#
#       There are tweaks for specific operating systems such as AIX, CygWin,
#       Darwin, MinGW, and NonStop.
#
#   (3) This script is generated from the Groovy template
#       https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
#       within the Gradle project.
#
#       You can find Gradle at https://github.com/gradle/gradle/.
#
##############################################################################

# Attempt to set APP_HOME

# Resolve links: $0 may be a link
app_path=$0

# Need this for daisy-chained symlinks.
while
    APP_HOME=${app_path%"${app_path##*/}"}  # leaves a trailing /; empty if no leading path
    [ -h "$app_path" ]
do
    ls=$( ls -ld "$app_path" )
    link=${ls#*' -> '}
    case $link in             #(
      /*)   app_path=$link ;; #(
      *)    app_path=$APP_HOME$link ;;
    esac
done

# This is normally unused
# shellcheck disable=SC2034
APP_BASE_NAME=${0##*/}
# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)
APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s\n' "$PWD" ) || exit

# Use the maximum available, or set MAX_FD != -1 to use that value.
MAX_FD=maximum

warn () {
    echo "$*"
} >&2

die () {
    echo
    echo "$*"
    echo
    exit 1
} >&2

# OS specific support (must be 'true' or 'false').
cygwin=false
msys=false
darwin=false
nonstop=false
case "$( uname )" in                #(
  CYGWIN* )         cygwin=true  ;; #(
  Darwin* )         darwin=true  ;; #(
  MSYS* | MINGW* )  msys=true    ;; #(
  NONSTOP* )        nonstop=true ;;
esac

CLASSPATH="\\\"\\\""


# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
        # IBM's JDK on AIX uses strange locations for the executables
        JAVACMD=$JAVA_HOME/jre/sh/java
    else
        JAVACMD=$JAVA_HOME/bin/java
    fi
    if [ ! -x "$JAVACMD" ] ; then
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
else
    JAVACMD=java
    if ! command -v java >/dev/null 2>&1
    then
        die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        ulimit -n "$MAX_FD" ||
            warn "Could not set maximum file descriptor limit to $MAX_FD"
    esac
fi

# Collect all arguments for the java command, stacking in reverse order:
#   * args from the command line
#   * the main class name
#   * -classpath
#   * -D...appname settings
#   * --module-path (only if needed)
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.

# For Cygwin or MSYS, switch paths to Windows format before running java
if "$cygwin" || "$msys" ; then
    APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
    CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )

    JAVACMD=$( cygpath --unix "$JAVACMD" )

    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    for arg do
        if
            case $arg in                                #(
              -*)   false ;;                            # don't mess with options #(
              /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath
                    [ -e "$t" ] ;;                      #(
              *)    false ;;
            esac
        then
            arg=$( cygpath --path --ignore --mixed "$arg" )
        fi
        # Roll the args list around exactly as many times as the number of
        # args, so each arg winds up back in the position where it started, but
        # possibly modified.
        #
        # NB: a `for` loop captures its iteration list before it begins, so
        # changing the positional parameters here affects neither the number of
        # iterations, nor the values presented in `arg`.
        shift                   # remove old arg
        set -- "$@" "$arg"      # push replacement arg
    done
fi


# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Collect all arguments for the java command:
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '${Hostname}' itself on the command line.

set -- \
        "-Dorg.gradle.appname=$APP_BASE_NAME" \
        -classpath "$CLASSPATH" \
        -jar "$APP_HOME/gradle/wrapper/gradle-wrapper.jar" \
        "$@"

# Stop when "xargs" is not available.
if ! command -v xargs >/dev/null 2>&1
then
    die "xargs is not available"
fi

# Use "xargs" to parse quoted args.
#
# With -n1 it outputs one arg per line, with the quotes and backslashes removed.
#
# In Bash we could simply go:
#
#   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
#   set -- "${ARGS[@]}" "$@"
#
# but POSIX shell has neither arrays nor command substitution, so instead we
# post-process each arg (as a line of input to sed) to backslash-escape any
# character that might be a shell metacharacter, then use eval to reverse
# that process (while maintaining the separation between arguments), and wrap
# the whole thing up as a single "set" statement.
#
# This will of course break if any of these variables contains a newline or
# an unmatched quote.
#

eval "set -- $(
        printf '%s\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
        xargs -n1 |
        sed ' s~[^-[:alnum:]+,./:=@_]~\\&~g; ' |
        tr '\n' ' '
    )" '"$@"'

exec "$JAVACMD" "$@"



================================================
FILE: examples/chat-rn/android/gradlew.bat
================================================
@REM Copyright (c) Meta Platforms, Inc. and affiliates.
@REM
@REM This source code is licensed under the MIT license found in the
@REM LICENSE file in the root directory of this source tree.

@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem
@rem SPDX-License-Identifier: Apache-2.0
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  Gradle startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:execute
@rem Setup the command line

set CLASSPATH=


@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" -jar "%APP_HOME%\gradle\wrapper\gradle-wrapper.jar" %*

:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd

:fail
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega



================================================
FILE: examples/chat-rn/android/app/debug.keystore
================================================
[Binary file]


================================================
FILE: examples/chat-rn/android/app/proguard-rules.pro
================================================
# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:



================================================
FILE: examples/chat-rn/android/app/src/debug/AndroidManifest.xml
================================================
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:usesCleartextTraffic="true"
        tools:targetApi="28"
        tools:ignore="GoogleAppIndexingWarning"/>
</manifest>



================================================
FILE: examples/chat-rn/android/app/src/main/AndroidManifest.xml
================================================
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme"
      android:supportsRtl="true">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
    </application>
</manifest>



================================================
FILE: examples/chat-rn/android/app/src/main/java/com/chatrn/MainActivity.kt
================================================
package com.chatrn

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ChatRN"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}



================================================
FILE: examples/chat-rn/android/app/src/main/java/com/chatrn/MainApplication.kt
================================================
package com.chatrn

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    loadReactNative(this)
  }
}



================================================
FILE: examples/chat-rn/android/app/src/main/res/drawable/rn_edit_text_material.xml
================================================
<?xml version="1.0" encoding="utf-8"?>
<!-- Copyright (C) 2014 The Android Open Source Project

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
-->
<inset xmlns:android="http://schemas.android.com/apk/res/android"
       android:insetLeft="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetRight="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetTop="@dimen/abc_edit_text_inset_top_material"
       android:insetBottom="@dimen/abc_edit_text_inset_bottom_material"
       >

    <selector>
        <!--
          This file is a copy of abc_edit_text_material (https://bit.ly/3k8fX7I).
          The item below with state_pressed="false" and state_focused="false" causes a NullPointerException.
          NullPointerException:tempt to invoke virtual method 'android.graphics.drawable.Drawable android.graphics.drawable.Drawable$ConstantState.newDrawable(android.content.res.Resources)'

          <item android:state_pressed="false" android:state_focused="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>

          For more info, see https://bit.ly/3CdLStv (react-native/pull/29452) and https://bit.ly/3nxOMoR.
        -->
        <item android:state_enabled="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>
        <item android:drawable="@drawable/abc_textfield_activated_mtrl_alpha"/>
    </selector>

</inset>



================================================
FILE: examples/chat-rn/android/app/src/main/res/values/strings.xml
================================================
<resources>
    <string name="app_name">ChatRN</string>
</resources>



================================================
FILE: examples/chat-rn/android/app/src/main/res/values/styles.xml
================================================
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>
    </style>

</resources>



================================================
FILE: examples/chat-rn/android/gradle/wrapper/gradle-wrapper.properties
================================================
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.14.1-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists



================================================
FILE: examples/chat-rn/ios/Podfile
================================================
# Resolve react_native_pods.rb with node to allow for hoisting
require Pod::Executable.execute_command('node', ['-p',
  'require.resolve(
    "react-native/scripts/react_native_pods.rb",
    {paths: [process.argv[1]]},
  )', __dir__]).strip

platform :ios, min_ios_version_supported
prepare_react_native_project!

linkage = ENV['USE_FRAMEWORKS']
if linkage != nil
  Pod::UI.puts "Configuring Pod with #{linkage}ally linked Frameworks".green
  use_frameworks! :linkage => linkage.to_sym
end

target 'ChatRN' do
  config = use_native_modules!

  use_react_native!(
    :path => config[:reactNativePath],
    # An absolute path to your application root.
    :app_path => "#{Pod::Config.instance.installation_root}/.."
  )

  post_install do |installer|
    # https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L197-L202
    react_native_post_install(
      installer,
      config[:reactNativePath],
      :mac_catalyst_enabled => false,
      # :ccache_enabled => true
    )
  end
end



================================================
FILE: examples/chat-rn/ios/.xcode.env
================================================
# This `.xcode.env` file is versioned and is used to source the environment
# used when running script phases inside Xcode.
# To customize your local environment, you can create an `.xcode.env.local`
# file that is not versioned.

# NODE_BINARY variable contains the PATH to the node executable.
#
# Customize the NODE_BINARY variable here.
# For example, to use nvm with brew, add the following line
# . "$(brew --prefix nvm)/nvm.sh" --no-use
export NODE_BINARY=$(command -v node)



================================================
FILE: examples/chat-rn/ios/ChatRN/AppDelegate.swift
================================================
import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?

  var reactNativeDelegate: ReactNativeDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    let delegate = ReactNativeDelegate()
    let factory = RCTReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    reactNativeDelegate = delegate
    reactNativeFactory = factory

    window = UIWindow(frame: UIScreen.main.bounds)

    factory.startReactNative(
      withModuleName: "ChatRN",
      in: window,
      launchOptions: launchOptions
    )

    return true
  }
}

class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}



================================================
FILE: examples/chat-rn/ios/ChatRN/Info.plist
================================================
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleDisplayName</key>
	<string>ChatRN</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleShortVersionString</key>
	<string>$(MARKETING_VERSION)</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>$(CURRENT_PROJECT_VERSION)</string>
	<key>LSRequiresIPhoneOS</key>
	<true/>
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<false/>
		<key>NSAllowsLocalNetworking</key>
		<true/>
	</dict>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>Photo library access required</string>
	<key>RCTNewArchEnabled</key>
	<true/>
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
	<key>UIRequiredDeviceCapabilities</key>
	<array>
		<string>arm64</string>
	</array>
	<key>UISupportedInterfaceOrientations</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
</dict>
</plist>



================================================
FILE: examples/chat-rn/ios/ChatRN/LaunchScreen.storyboard
================================================
<?xml version="1.0" encoding="UTF-8"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="15702" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="01J-lp-oVM">
    <device id="retina4_7" orientation="portrait" appearance="light"/>
    <dependencies>
        <deployment identifier="iOS"/>
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="15704"/>
        <capability name="Safe area layout guides" minToolsVersion="9.0"/>
        <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
    </dependencies>
    <scenes>
        <!--View Controller-->
        <scene sceneID="EHf-IW-A2E">
            <objects>
                <viewController id="01J-lp-oVM" sceneMemberID="viewController">
                    <view key="view" contentMode="scaleToFill" id="Ze5-6b-2t3">
                        <rect key="frame" x="0.0" y="0.0" width="375" height="667"/>
                        <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
                        <subviews>
                            <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="ChatRN" textAlignment="center" lineBreakMode="middleTruncation" baselineAdjustment="alignBaselines" minimumFontSize="18" translatesAutoresizingMaskIntoConstraints="NO" id="GJd-Yh-RWb">
                                <rect key="frame" x="0.0" y="202" width="375" height="43"/>
                                <fontDescription key="fontDescription" type="boldSystem" pointSize="36"/>
                                <nil key="highlightedColor"/>
                            </label>
                            <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="Powered by React Native" textAlignment="center" lineBreakMode="tailTruncation" baselineAdjustment="alignBaselines" minimumFontSize="9" translatesAutoresizingMaskIntoConstraints="NO" id="MN2-I3-ftu">
                                <rect key="frame" x="0.0" y="626" width="375" height="21"/>
                                <fontDescription key="fontDescription" type="system" pointSize="17"/>
                                <nil key="highlightedColor"/>
                            </label>
                        </subviews>
                        <color key="backgroundColor" systemColor="systemBackgroundColor" cocoaTouchSystemColor="whiteColor"/>
                        <constraints>
                            <constraint firstItem="Bcu-3y-fUS" firstAttribute="bottom" secondItem="MN2-I3-ftu" secondAttribute="bottom" constant="20" id="OZV-Vh-mqD"/>
                            <constraint firstItem="Bcu-3y-fUS" firstAttribute="centerX" secondItem="GJd-Yh-RWb" secondAttribute="centerX" id="Q3B-4B-g5h"/>
                            <constraint firstItem="MN2-I3-ftu" firstAttribute="centerX" secondItem="Bcu-3y-fUS" secondAttribute="centerX" id="akx-eg-2ui"/>
                            <constraint firstItem="MN2-I3-ftu" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" id="i1E-0Y-4RG"/>
                            <constraint firstItem="GJd-Yh-RWb" firstAttribute="centerY" secondItem="Ze5-6b-2t3" secondAttribute="bottom" multiplier="1/3" constant="1" id="moa-c2-u7t"/>
                            <constraint firstItem="GJd-Yh-RWb" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" symbolic="YES" id="x7j-FC-K8j"/>
                        </constraints>
                        <viewLayoutGuide key="safeArea" id="Bcu-3y-fUS"/>
                    </view>
                </viewController>
                <placeholder placeholderIdentifier="IBFirstResponder" id="iYj-Kq-Ea1" userLabel="First Responder" sceneMemberID="firstResponder"/>
            </objects>
            <point key="canvasLocation" x="52.173913043478265" y="375"/>
        </scene>
    </scenes>
</document>



================================================
FILE: examples/chat-rn/ios/ChatRN/PrivacyInfo.xcprivacy
================================================
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>NSPrivacyAccessedAPITypes</key>
	<array>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>C617.1</string>
				<string>3B52.1</string>
			</array>
		</dict>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryUserDefaults</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>CA92.1</string>
			</array>
		</dict>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategorySystemBootTime</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>35F9.1</string>
			</array>
		</dict>
	</array>
	<key>NSPrivacyCollectedDataTypes</key>
	<array/>
	<key>NSPrivacyTracking</key>
	<false/>
</dict>
</plist>



================================================
FILE: examples/chat-rn/ios/ChatRN/Images.xcassets/Contents.json
================================================
{
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}



================================================
FILE: examples/chat-rn/ios/ChatRN/Images.xcassets/AppIcon.appiconset/Contents.json
================================================
{
  "images" : [
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "20x20"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "20x20"
    },
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "29x29"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "29x29"
    },
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "40x40"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "40x40"
    },
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "60x60"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "60x60"
    },
    {
      "idiom" : "ios-marketing",
      "scale" : "1x",
      "size" : "1024x1024"
    }
  ],
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}



================================================
FILE: examples/chat-rn/ios/ChatRNTests/ChatRNTests.m
================================================
#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>

#import <React/RCTLog.h>
#import <React/RCTRootView.h>

#define TIMEOUT_SECONDS 600
#define TEXT_TO_LOOK_FOR @"Welcome to React"

@interface ChatRNTests : XCTestCase

@end

@implementation ChatRNTests

- (BOOL)findSubviewInView:(UIView *)view matching:(BOOL (^)(UIView *view))test
{
  if (test(view)) {
    return YES;
  }
  for (UIView *subview in [view subviews]) {
    if ([self findSubviewInView:subview matching:test]) {
      return YES;
    }
  }
  return NO;
}

- (void)testRendersWelcomeScreen
{
  UIViewController *vc = [[[RCTSharedApplication() delegate] window] rootViewController];
  NSDate *date = [NSDate dateWithTimeIntervalSinceNow:TIMEOUT_SECONDS];
  BOOL foundElement = NO;

  __block NSString *redboxError = nil;
#ifdef DEBUG
  RCTSetLogFunction(
      ^(RCTLogLevel level, RCTLogSource source, NSString *fileName, NSNumber *lineNumber, NSString *message) {
        if (level >= RCTLogLevelError) {
          redboxError = message;
        }
      });
#endif

  while ([date timeIntervalSinceNow] > 0 && !foundElement && !redboxError) {
    [[NSRunLoop mainRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];
    [[NSRunLoop mainRunLoop] runMode:NSRunLoopCommonModes beforeDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];

    foundElement = [self findSubviewInView:vc.view
                                  matching:^BOOL(UIView *view) {
                                    if ([view.accessibilityLabel isEqualToString:TEXT_TO_LOOK_FOR]) {
                                      return YES;
                                    }
                                    return NO;
                                  }];
  }

#ifdef DEBUG
  RCTSetLogFunction(RCTDefaultLogFunction);
#endif

  XCTAssertNil(redboxError, @"RedBox error: %@", redboxError);
  XCTAssertTrue(foundElement, @"Couldn't find element with text '%@' in %d seconds", TEXT_TO_LOOK_FOR, TIMEOUT_SECONDS);
}

@end



================================================
FILE: examples/chat-rn/ios/ChatRNTests/Info.plist
================================================
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>BNDL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>1</string>
</dict>
</plist>



================================================
FILE: examples/chat-rn/src/apiKey.ts
================================================
export const apiKey = "chat-rn-cli-example-jazz@garden.co";



================================================
FILE: examples/chat-rn/src/App.tsx
================================================
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JazzReactNativeProvider } from "jazz-tools/react-native";
import React, { StrictMode, useEffect, useState } from "react";
import { Linking } from "react-native";
import { apiKey } from "./apiKey";
import { ChatScreen } from "./chat";
import { HandleInviteScreen } from "./invite";
import { theme } from "./theme";

type RootStackParamList = {
  ChatScreen: undefined;
  HandleInviteScreen: undefined;
};

// Create the stack navigator with proper typing
const Stack = createNativeStackNavigator<RootStackParamList>();

// const prefix = Linking.createURL("/");

// const linking = {
//   prefixes: [prefix],
//   config: {
//     screens: {
//       HandleInviteScreen: {
//         path: "router/invite/:valueHint?/:valueID/:inviteSecret",
//       },
//     },
//   },
// };

function App() {
  const [initialRoute, setInitialRoute] = useState<
    "ChatScreen" | "HandleInviteScreen"
  >("ChatScreen");
  const navigationRef = useNavigationContainerRef();
  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        if (url && url.includes("invite")) {
          setInitialRoute("HandleInviteScreen");
        }
      }
    });
  }, []);

  return (
    <StrictMode>
      <JazzReactNativeProvider
        sync={{
          peer: `wss://cloud.jazz.tools/?key=${apiKey}`,
        }}
      >
        <NavigationContainer ref={navigationRef} theme={theme}>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              options={{ title: "Jazz Chat" }}
              name="ChatScreen"
              component={ChatScreen}
            />
            <Stack.Screen
              name="HandleInviteScreen"
              component={HandleInviteScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </JazzReactNativeProvider>
    </StrictMode>
  );
}

export default App;



================================================
FILE: examples/chat-rn/src/chat.tsx
================================================
import Clipboard from "@react-native-clipboard/clipboard";
import { launchImageLibrary } from "react-native-image-picker";
import {
  co,
  CoPlainText,
  getLoadedOrUndefined,
  Group,
  ID,
  ImageDefinition,
  LastAndAllCoMapEdits,
  Loaded,
} from "jazz-tools";
import {
  useAccount,
  useCoState,
  useLogOut,
  Image,
} from "jazz-tools/react-native";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  Easing,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Chat, Message } from "./schema";
import { createImage } from "jazz-tools/media";

export function ChatScreen({ navigation }: { navigation: any }) {
  const me = useAccount();
  const logOut = useLogOut();
  const [chatId, setChatId] = useState<string>();
  const [chatIdInput, setChatIdInput] = useState<string>();
  const loadedChat = useCoState(Chat, chatId, {
    resolve: { $each: { text: true } },
  });
  const [message, setMessage] = useState("");
  const profile = getLoadedOrUndefined(me)?.profile;
  const [imageUploading, setImageUploading] = useState(false);
  const spinAnim = useRef(new Animated.Value(0)).current;

  function handleLogOut() {
    setChatId(undefined);
    logOut();
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={handleLogOut} title="Logout" />,
      headerLeft: () =>
        loadedChat ? (
          <Button
            onPress={() => {
              if (loadedChat?.$jazz.id) {
                Clipboard.setString(loadedChat.$jazz.id);
                console.log(
                  "Copied to clipboard",
                  `Chat ID: ${loadedChat.$jazz.id}`,
                );
              }
            }}
            title="Share"
          />
        ) : null,
    });
  }, [navigation, loadedChat]);

  useEffect(() => {
    let loop: Animated.CompositeAnimation | null = null;

    if (imageUploading) {
      const flip = Animated.sequence([
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 400, // quick flip
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.delay(700), // pause before next flip
      ]);

      loop = Animated.loop(flip);
      loop.start();
    } else {
      spinAnim.stopAnimation();
      spinAnim.setValue(0);
    }

    return () => {
      loop?.stop();
    };
  }, [imageUploading]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const createChat = () => {
    if (!me.$isLoaded) return;
    const group = Group.create({ owner: me });
    group.addMember("everyone", "writer");
    const chat = Chat.create([], { owner: group });
    setChatId(chat.$jazz.id);
  };

  const joinChat = () => {
    if (chatIdInput) {
      setChatId(chatIdInput as ID<typeof Chat>);
    } else {
      console.warn("Error: Chat ID cannot be empty.");
    }
  };

  const sendMessage = () => {
    if (!loadedChat.$isLoaded) return;
    if (message.trim()) {
      loadedChat.$jazz.push(
        Message.create(
          { text: co.plainText().create(message, loadedChat.$jazz.owner) },
          loadedChat.$jazz.owner,
        ),
      );
      setMessage("");
    }
  };

  const sendPhoto = async () => {
    setImageUploading(true);
    try {
      if (!loadedChat.$isLoaded || !me.$isLoaded)
        throw new Error("Chat or user not loaded");

      const result = await launchImageLibrary({
        mediaType: "photo",
        quality: 0.8,
      });

      if (!result.didCancel && result.assets?.[0].uri) {
        const image = await createImage(result.assets[0].uri, {
          owner: loadedChat.$jazz.owner,
          placeholder: "blur",
          maxSize: 1024,
        });

        const thisMessage = Message.create(
          {
            text: co
              .plainText()
              .create(message ? message.trim() : "", loadedChat.$jazz.owner),
            image,
          },
          loadedChat.$jazz.owner,
        );

        loadedChat.$jazz.push(thisMessage);

        setMessage("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setImageUploading(false);
    }
  };

  const renderMessageItem = ({
    item,
  }: {
    item: Loaded<typeof Message, { text: true }>;
  }) => {
    const isMe = item.$jazz.getEdits()?.text?.by?.isMe;
    return (
      <View
        style={[
          styles.messageContainer,
          isMe ? styles.myMessage : styles.otherMessage,
        ]}
      >
        {!isMe ? (
          <Text
            style={[
              styles.senderName,
              isMe ? styles.textRight : styles.textLeft,
            ]}
          >
            {getEditorName(item?.$jazz.getEdits()?.text)}
          </Text>
        ) : null}
        <View style={styles.messageContent}>
          {item.image && (
            <Image
              imageId={item.image?.$jazz.id}
              width={200}
              height="original"
            />
          )}
          <Text style={styles.messageText}>{item.text}</Text>
          <Text
            style={[
              styles.timestamp,
              !isMe ? styles.timestampOther : styles.timestampMy,
            ]}
          >
            {item?.$jazz
              .getEdits()
              ?.text?.madeAt?.getHours()
              .toString()
              .padStart(2, "0")}
            :
            {item?.$jazz
              .getEdits()
              ?.text?.madeAt?.getMinutes()
              .toString()
              .padStart(2, "0")}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!loadedChat.$isLoaded ? (
        <View style={styles.welcomeContainer}>
          <Text style={styles.usernameLabel}>Username</Text>
          <TextInput
            style={styles.usernameInput}
            value={getLoadedOrUndefined(profile)?.name ?? ""}
            onChangeText={(value) => {
              if (profile?.$isLoaded) {
                profile.$jazz.set("name", value);
              }
            }}
            textAlignVertical="center"
            onSubmitEditing={sendMessage}
            testID="username-input"
          />
          <TouchableOpacity onPress={createChat} style={styles.newChatButton}>
            <Text style={styles.buttonText}>Start new chat</Text>
          </TouchableOpacity>
          <Text style={styles.usernameLabel}>Join existing chat</Text>
          <TextInput
            style={styles.chatIdInput}
            placeholder="Chat ID"
            value={chatIdInput ?? ""}
            onChangeText={setChatIdInput}
            textAlignVertical="center"
            onSubmitEditing={joinChat}
            testID="chat-id-input"
          />
          <TouchableOpacity onPress={joinChat} style={styles.joinChatButton}>
            <Text style={styles.buttonText}>Join chat</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              flex: 1,
              gap: 6,
              padding: 8,
            }}
            style={styles.messageList}
            data={loadedChat}
            keyExtractor={(item) => item.$jazz.id}
            renderItem={renderMessageItem}
          />

          <KeyboardAvoidingView
            keyboardVerticalOffset={110}
            behavior="padding"
            style={styles.inputContainer}
          >
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.messageInput}
                value={imageUploading ? "Uploading..." : message}
                onChangeText={imageUploading ? undefined : (v) => setMessage(v)}
                placeholder={
                  imageUploading ? "Uploading..." : "Type a message..."
                }
                textAlignVertical="center"
                onSubmitEditing={imageUploading ? undefined : sendMessage}
                testID="message-input"
              />
              <TouchableOpacity
                onPress={imageUploading ? undefined : sendPhoto}
                style={styles.sendButton}
                testID="send-photo-button"
              >
                {imageUploading ? (
                  <Animated.Text style={{ transform: [{ rotate: spin }] }}>
                    ⌛
                  </Animated.Text>
                ) : (
                  <Text>📸</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={imageUploading ? undefined : sendMessage}
                style={styles.sendButton}
                testID="send-button"
              >
                <Text>↑</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </>
      )}
    </SafeAreaView>
  );
}

function getEditorName(
  edit?: LastAndAllCoMapEdits<CoPlainText>,
): string | undefined {
  if (!edit?.by?.profile || !edit.by.profile.$isLoaded) {
    return;
  }
  return edit.by.profile.name;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  usernameLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  usernameInput: {
    width: 160,
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  chatIdInput: {
    width: 320,
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 24,
    marginTop: 8,
  },
  newChatButton: {
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  joinChatButton: {
    backgroundColor: "#10B981",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  messageList: {
    flex: 1,
  },
  inputContainer: {
    padding: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  messageInput: {
    flex: 1,
    height: 42,
    paddingHorizontal: 8,
  },
  sendButton: {
    paddingHorizontal: 16,
  },
  messageContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  myMessage: {
    alignSelf: "flex-end",
  },
  otherMessage: {
    alignSelf: "flex-start",
  },
  senderName: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  textRight: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  messageContent: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
  },
  timestampOther: {
    textAlign: "left",
    marginTop: 8,
  },
  timestampMy: {
    textAlign: "right",
    marginTop: 4,
  },
  avatar: {
    borderRadius: 16,
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});



================================================
FILE: examples/chat-rn/src/invite.tsx
================================================
import { useAcceptInviteNative } from "jazz-tools/react-native";
import React from "react";
import { Text } from "react-native";
import { Chat } from "./schema";

export function HandleInviteScreen({ navigation }: { navigation: any }) {
  useAcceptInviteNative({
    invitedObjectSchema: Chat,
    onAccept: async (chatId) => {
      navigation.navigate("ChatScreen", { chatId });
    },
  });

  return <Text>Accepting invite...</Text>;
}



================================================
FILE: examples/chat-rn/src/polyfills.ts
================================================
/* -eslint-disable import/order */

// @ts-expect-error - @types/react-native doesn't cover this file
import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";
// import 'react-native-polyfill-globals/auto';

// @ts-expect-error - @types/readable-stream doesn't have ReadableStream type
import { ReadableStream } from "readable-stream";
polyfillGlobal("ReadableStream", () => ReadableStream);

import "@azure/core-asynciterator-polyfill";

import "@bacons/text-decoder/install";

import "react-native-get-random-values";



================================================
FILE: examples/chat-rn/src/schema.ts
================================================
import { co } from "jazz-tools";

export const Message = co.map({
  text: co.plainText(),
  image: co.optional(co.image()),
});

export const Chat = co.list(Message);



================================================
FILE: examples/chat-rn/src/theme.ts
================================================
import { Theme } from "@react-navigation/native";

export const theme: Theme = {
  dark: false,
  colors: {
    primary: "#3b82f6", // blue color for active elements
    background: "#ffffff", // white background
    card: "#ffffff", // white background for cards
    text: "#000000", // black text
    border: "#d1d5db", // light gray border
    notification: "#ef4444", // red for notifications
  },
  fonts: {
    regular: {
      fontFamily: "System",
      fontWeight: "400" as const,
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500" as const,
    },
    bold: {
      fontFamily: "System",
      fontWeight: "700" as const,
    },
    heavy: {
      fontFamily: "System",
      fontWeight: "900" as const,
    },
  },
};


