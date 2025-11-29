Directory structure:
└── benjamineruvieru-react-native-credentials-manager/
    ├── README.md
    ├── app.plugin.js
    ├── babel.config.js
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── lefthook.yml
    ├── LICENSE
    ├── package.json
    ├── react-native-credentials-manager.podspec
    ├── react-native.config.js
    ├── tsconfig.build.json
    ├── tsconfig.json
    ├── turbo.json
    ├── .editorconfig
    ├── .flowconfig
    ├── .nvmrc
    ├── .watchmanconfig
    ├── .yarnrc.yml
    ├── android/
    │   ├── gradle.properties
    │   └── src/
    │       ├── main/
    │       │   ├── AndroidManifest.xml
    │       │   ├── AndroidManifestNew.xml
    │       │   └── java/
    │       │       └── com/
    │       │           └── credentialsmanager/
    │       │               ├── CredentialsManagerModuleImpl.kt
    │       │               ├── CredentialsManagerPackage.kt
    │       │               └── handlers/
    │       │                   ├── CredentialHandler.kt
    │       │                   └── ErrorHandler.kt
    │       ├── newarch/
    │       │   └── java/
    │       │       └── com/
    │       │           └── credentialsmanager/
    │       │               └── CredentialsManagerModule.kt
    │       └── oldarch/
    │           └── java/
    │               └── com/
    │                   └── credentialsmanager/
    │                       └── CredentialsManagerModule.kt
    ├── example/
    │   ├── README.md
    │   ├── app.json
    │   ├── babel.config.js
    │   ├── Gemfile
    │   ├── index.js
    │   ├── jest.config.js
    │   ├── metro.config.js
    │   ├── package.json
    │   ├── react-native.config.js
    │   ├── .watchmanconfig
    │   ├── android/
    │   │   ├── gradle.properties
    │   │   ├── gradlew
    │   │   ├── gradlew.bat
    │   │   ├── app/
    │   │   │   ├── debug.keystore
    │   │   │   ├── proguard-rules.pro
    │   │   │   └── src/
    │   │   │       ├── debug/
    │   │   │       │   └── AndroidManifest.xml
    │   │   │       └── main/
    │   │   │           ├── AndroidManifest.xml
    │   │   │           ├── java/
    │   │   │           │   └── credentialsmanager/
    │   │   │           │       └── example/
    │   │   │           │           ├── MainActivity.kt
    │   │   │           │           └── MainApplication.kt
    │   │   │           └── res/
    │   │   │               ├── drawable/
    │   │   │               │   └── rn_edit_text_material.xml
    │   │   │               └── values/
    │   │   │                   ├── strings.xml
    │   │   │                   └── styles.xml
    │   │   └── gradle/
    │   │       └── wrapper/
    │   │           └── gradle-wrapper.properties
    │   ├── ios/
    │   │   ├── Podfile
    │   │   ├── .xcode.env
    │   │   ├── .xcode.env.local
    │   │   └── CredentialsManagerExample/
    │   │       ├── AppDelegate.swift
    │   │       ├── CredentialsManagerExample.entitlements
    │   │       ├── Info.plist
    │   │       ├── LaunchScreen.storyboard
    │   │       ├── PrivacyInfo.xcprivacy
    │   │       └── Images.xcassets/
    │   │           ├── Contents.json
    │   │           └── AppIcon.appiconset/
    │   │               └── Contents.json
    │   └── src/
    │       ├── App.tsx
    │       └── helpers/
    │           └── passkeyTestHelper.ts
    ├── ios/
    │   ├── CredentialsManager.h
    │   └── CredentialsManager.mm
    ├── src/
    │   ├── index.tsx
    │   ├── NativeCredentialsManager.ts
    │   └── __tests__/
    │       ├── index.test.ts
    │       └── index.test.tsx
    └── .github/
        ├── actions/
        │   └── setup/
        │       └── action.yml
        ├── ISSUE_TEMPLATE/
        │   ├── bug_report.md
        │   ├── config.yml
        │   └── feature_request.md
        └── workflows/
            └── ci.yml


Files Content:

================================================
FILE: README.md
================================================
<h1 align="center">
React Native Credentials Manager 
</h1>

![App Screens](IMG/flow.png)

A React Native library that implements the [Credential Manager](https://developer.android.com/identity/sign-in/credential-manager) API for Android and [AuthenticationServices](https://developer.apple.com/documentation/authenticationservices) for iOS. This library allows you to manage passwords, passkeys and platform-specific sign-in (Google Sign-In on Android, Apple Sign In on iOS) in your React Native applications.

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-credentials-manager">
    <img alt="npm version" src="https://badge.fury.io/js/react-native-credentials-manager.svg"/>
  </a>
  <a title='License' href="https://github.com/benjamineruvieru/react-native-credentials-manager/blob/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
  <a title='Tweet' href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20React%20Native%20Credentials%20Manager%20Library&url=https://github.com/benjamineruvieru/react-native-credentials-manager&via=benjamin_eru&hashtags=react,reactnative,opensource,github,ux" height="18">
    <img src='https://img.shields.io/twitter/url/http/shields.io.svg?style=social' />
  </a>
</p>

## Platform Support

- ✅ **Android**: Implementation with Credential Manager API (Android 4.4+ / API 19+)
  - **Android 4.4+ (API 19+)**: Username/password storage and federated sign-in (Google Sign-In)
  - **Android 9+ (API 28+)**: Full passkey (FIDO2/WebAuthn) support
- ✅ **iOS**: Full implementation with AuthenticationServices (iOS 16.0+)

### Platform-Specific Features

| Feature                   | Android                   | iOS                               |
| ------------------------- | ------------------------- | --------------------------------- |
| Passkeys                  | ✅ Credential Manager API | ✅ AuthenticationServices         |
| AutoFill Password Support | ✅ Credential Manager API | ✅ AuthenticationServices         |
| Manual Password Storage   | ✅ Credential Manager API | ❌ Not supported (iOS limitation) |
| Third-party Sign In       | ✅ Google Sign In         | ✅ Apple Sign In                  |

> [!IMPORTANT]
> 📚 **Documentation has moved!** The complete documentation is now available at [https://docs.benjamineruvieru.com/docs/react-native-credentials-manager/](https://docs.benjamineruvieru.com/docs/react-native-credentials-manager/)

> [!NOTE] > **iOS Implementation**: This library strictly follows Apple's Authentication Services framework. Manual password storage is not supported on iOS as it's not part of Apple's official Authentication Services APIs. Use AutoFill passwords instead.

> [!NOTE] > **Android Implementation**: Features are available based on Android version:
>
> - **API 19+**: Basic credential storage and Google Sign-In
> - **API 28+**: Passkey support added



================================================
FILE: app.plugin.js
================================================
// set Info.plist values
import configPlugin from '@expo/config-plugins';

const { createRunOncePlugin, withEntitlementsPlist, withInfoPlist } =
  configPlugin;

const withAllowMixedLocalizations = function (config) {
  return withInfoPlist(config, function (modConfig) {
    modConfig.modResults.CFBundleAllowMixedLocalizations =
      modConfig.modResults.CFBundleAllowMixedLocalizations ?? true;

    return modConfig;
  });
};

const withDefaultAppleSignIn = function (config) {
  config = withAllowMixedLocalizations(config);
  return withEntitlementsPlist(config, function (modConfig) {
    modConfig.modResults['com.apple.developer.applesignin'] = ['Default'];
    return modConfig;
  });
};

const withAppleSignin = (config) => {
  config = withDefaultAppleSignIn(config);
  return config;
};

export default createRunOncePlugin(withAppleSignin, 'apple-signin');



================================================
FILE: babel.config.js
================================================
module.exports = {
  presets: ['module:react-native-builder-bob/babel-preset'],
};



================================================
FILE: CODE_OF_CONDUCT.md
================================================

# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual
identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall
  community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of
  any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address,
  without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series of
actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or permanent
ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within the
community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.1, available at
[https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

Community Impact Guidelines were inspired by
[Mozilla's code of conduct enforcement ladder][Mozilla CoC].

For answers to common questions about this code of conduct, see the FAQ at
[https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
[https://www.contributor-covenant.org/translations][translations].

[homepage]: https://www.contributor-covenant.org
[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
[Mozilla CoC]: https://github.com/mozilla/diversity
[FAQ]: https://www.contributor-covenant.org/faq
[translations]: https://www.contributor-covenant.org/translations



================================================
FILE: CONTRIBUTING.md
================================================
# Contributing

Contributions are always welcome, no matter how large or small!

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project. Before contributing, please read the [code of conduct](./CODE_OF_CONDUCT.md).

## Development workflow

This project is a monorepo managed using [Yarn workspaces](https://yarnpkg.com/features/workspaces). It contains the following packages:

- The library package in the root directory.
- An example app in the `example/` directory.

To get started with the project, run `yarn` in the root directory to install the required dependencies for each package:

```sh
yarn
```

> Since the project relies on Yarn workspaces, you cannot use [`npm`](https://github.com/npm/cli) for development.

The [example app](/example/) demonstrates usage of the library. You need to run it to test any changes you make.

It is configured to use the local version of the library, so any changes you make to the library's source code will be reflected in the example app. Changes to the library's JavaScript code will be reflected in the example app without a rebuild, but native code changes will require a rebuild of the example app.

If you want to use Android Studio or XCode to edit the native code, you can open the `example/android` or `example/ios` directories respectively in those editors. To edit the Objective-C or Swift files, open `example/ios/CredentialsManagerExample.xcworkspace` in XCode and find the source files at `Pods > Development Pods > react-native-credentials-manager`.

To edit the Java or Kotlin files, open `example/android` in Android studio and find the source files at `react-native-credentials-manager` under `Android`.

You can use various commands from the root directory to work with the project.

To start the packager:

```sh
yarn example start
```

To run the example app on Android:

```sh
yarn example android
```

To run the example app on iOS:

```sh
yarn example ios
```

To confirm that the app is running with the new architecture, you can check the Metro logs for a message like this:

```sh
Running "CredentialsManagerExample" with {"fabric":true,"initialProps":{"concurrentRoot":true},"rootTag":1}
```

Note the `"fabric":true` and `"concurrentRoot":true` properties.

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
yarn typecheck
yarn lint
```

To fix formatting errors, run the following:

```sh
yarn lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```sh
yarn test
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

### Publishing to npm

We use [release-it](https://github.com/release-it/release-it) to make it easier to publish new versions. It handles common tasks like bumping version based on semver, creating tags and releases etc.

To publish new versions, run the following:

```sh
yarn release
```

### Scripts

The `package.json` file contains various scripts for common tasks:

- `yarn`: setup project by installing dependencies.
- `yarn typecheck`: type-check files with TypeScript.
- `yarn lint`: lint files with ESLint.
- `yarn test`: run unit tests with Jest.
- `yarn example start`: start the Metro server for the example app.
- `yarn example android`: run the example app on Android.
- `yarn example ios`: run the example app on iOS.

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.



================================================
FILE: lefthook.yml
================================================
pre-commit:
  parallel: true
  commands:
    lint:
      glob: "*.{js,ts,jsx,tsx}"
      run: npx eslint {staged_files}
    types:
      glob: "*.{js,ts, jsx, tsx}"
      run: npx tsc
commit-msg:
  parallel: true
  commands:
    commitlint:
      run: npx commitlint --edit



================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2025 Benjamin
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



================================================
FILE: package.json
================================================
{
  "name": "react-native-credentials-manager",
  "version": "0.8.1",
  "description": "A React Native library that implements the Credential Manager API for Android. This library allows you to manage passwords and passkeys in your React Native applications.",
  "source": "./src/index.tsx",
  "main": "./lib/commonjs/index.js",
  "module": "./lib/module/index.js",
  "types": "./lib/typescript/module/src/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./lib/typescript/module/src/index.d.ts",
        "default": "./lib/module/index.js"
      },
      "require": {
        "types": "./lib/typescript/commonjs/src/index.d.ts",
        "default": "./lib/commonjs/index.js"
      }
    }
  },
  "files": [
    "src",
    "lib",
    "android",
    "ios",
    "cpp",
    "*.podspec",
    "react-native.config.js",
    "app.plugin.js",
    "!ios/build",
    "!android/build",
    "!android/gradle",
    "!android/gradlew",
    "!android/gradlew.bat",
    "!android/local.properties",
    "!**/__tests__",
    "!**/__fixtures__",
    "!**/__mocks__",
    "!**/.*"
  ],
  "scripts": {
    "example": "yarn workspace react-native-credentials-manager-example",
    "test": "jest",
    "typecheck": "tsc",
    "lint": "eslint \"**/*.{js,ts,tsx}\"",
    "clean": "del-cli android/build example/android/build example/android/app/build example/ios/build lib",
    "prepare": "bob build",
    "release": "release-it"
  },
  "keywords": [
    "react-native",
    "ios",
    "android",
    "passkeys",
    "webauthn",
    "authentication",
    "credential-manager",
    "google-signin",
    "passwordless",
    "biometric",
    "security",
    "identity",
    "fido2",
    "signin"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/benjamineruvieru/react-native-credentials-manager.git"
  },
  "author": "Benjamin <benjamineruvieru@gmail.com> (https://github.com/benjamineruvieru)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/benjamineruvieru/react-native-credentials-manager/issues"
  },
  "homepage": "https://docs.benjamineruvieru.com/docs/react-native-credentials-manager/",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  },
  "devDependencies": {
    "@commitlint/config-conventional": "^17.0.2",
    "@evilmartians/lefthook": "^1.5.0",
    "@react-native-community/cli": "15.0.1",
    "@react-native/eslint-config": "^0.73.1",
    "@release-it/conventional-changelog": "^9.0.2",
    "@types/jest": "^29.5.5",
    "@types/react": "^18.2.44",
    "commitlint": "^17.0.2",
    "del-cli": "^5.1.0",
    "eslint": "^8.51.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.1",
    "flow-bin": "^0.259.1",
    "jest": "^29.7.0",
    "prettier": "^3.0.3",
    "react": "18.3.1",
    "react-native": "0.77.0",
    "react-native-builder-bob": "^0.36.0",
    "react-native-dotenv": "^3.4.11",
    "release-it": "^17.10.0",
    "turbo": "^1.10.7",
    "typescript": "^5.2.2"
  },
  "resolutions": {
    "@types/react": "^18.2.44"
  },
  "peerDependencies": {
    "react": "*",
    "react-native": "*"
  },
  "workspaces": [
    "example"
  ],
  "packageManager": "yarn@3.6.1",
  "jest": {
    "preset": "react-native",
    "modulePathIgnorePatterns": [
      "<rootDir>/example/node_modules",
      "<rootDir>/lib/"
    ]
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "release-it": {
    "git": {
      "commitMessage": "chore: release ${version}",
      "tagName": "v${version}"
    },
    "npm": {
      "publish": true
    },
    "github": {
      "release": true
    },
    "plugins": {
      "@release-it/conventional-changelog": {
        "preset": {
          "name": "conventionalcommits",
          "types": [
            {
              "type": "feat",
              "section": "✨ Features"
            },
            {
              "type": "fix",
              "section": "🐛 Bug Fixes"
            },
            {
              "type": "perf",
              "section": "💨 Performance Improvements"
            },
            {
              "type": "chore(deps)",
              "section": "🛠️ Dependency Upgrades"
            },
            {
              "type": "docs",
              "section": "📚 Documentation"
            }
          ]
        }
      }
    }
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@react-native",
      "prettier"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          "quoteProps": "consistent",
          "singleQuote": true,
          "tabWidth": 2,
          "trailingComma": "es5",
          "useTabs": false
        }
      ]
    }
  },
  "eslintIgnore": [
    "node_modules/",
    "lib/"
  ],
  "prettier": {
    "quoteProps": "consistent",
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "useTabs": false
  },
  "react-native-builder-bob": {
    "source": "src",
    "output": "lib",
    "targets": [
      "codegen",
      [
        "commonjs",
        {
          "esm": true
        }
      ],
      [
        "module",
        {
          "esm": true
        }
      ],
      [
        "typescript",
        {
          "project": "tsconfig.build.json",
          "esm": true
        }
      ]
    ]
  },
  "codegenConfig": {
    "name": "RNCredentialsManagerSpec",
    "type": "modules",
    "jsSrcsDir": "src",
    "outputDir": {
      "ios": "ios/generated",
      "android": "android/generated"
    },
    "android": {
      "javaPackageName": "com.credentialsmanager"
    },
    "includesGeneratedCode": true
  },
  "create-react-native-library": {
    "type": "turbo-module",
    "languages": "kotlin-objc",
    "version": "0.47.0"
  }
}



================================================
FILE: react-native-credentials-manager.podspec
================================================
require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))
folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

Pod::Spec.new do |s|
  s.name         = "react-native-credentials-manager"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "15.1" }
  s.source       = { :git => "https://github.com/benjamineruvieru/react-native-credentials-manager.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,cpp}"
  s.private_header_files = "ios/generated/**/*.h"

  # iOS frameworks for credential management
  s.frameworks = 'AuthenticationServices', 'LocalAuthentication', 'Security'

  # Use install_modules_dependencies helper to install the dependencies if React Native version >=0.71.0.
  # See https://github.com/facebook/react-native/blob/febf6b7f33fdb4904669f99d795eba4c0f95d7bf/scripts/cocoapods/new_architecture.rb#L79.
  if respond_to?(:install_modules_dependencies, true)
    install_modules_dependencies(s)
  else
    s.dependency "React-Core"

    # Don't install the dependencies when we run `pod install` in the old architecture.
    if ENV['RCT_NEW_ARCH_ENABLED'] == '1' then
      s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"
      s.pod_target_xcconfig    = {
          "HEADER_SEARCH_PATHS" => "\"$(PODS_ROOT)/boost\"",
          "OTHER_CPLUSPLUSFLAGS" => "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1",
          "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"
      }
      s.dependency "React-Codegen"
      s.dependency "RCT-Folly"
      s.dependency "RCTRequired"
      s.dependency "RCTTypeSafety"
      s.dependency "ReactCommon/turbomodule/core"
    end
  end
end



================================================
FILE: react-native.config.js
================================================
/**
 * @type {import('@react-native-community/cli-types').UserDependencyConfig}
 */
module.exports = {
  dependency: {
    platforms: {
      android: {
        cmakeListsPath: 'generated/jni/CMakeLists.txt',
      },
    },
  },
};



================================================
FILE: tsconfig.build.json
================================================
{
  "extends": "./tsconfig",
  "exclude": ["example", "lib"]
}



================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "rootDir": ".",
    "paths": {
      "react-native-credentials-manager": ["./src/index"]
    },
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react-jsx",
    "lib": ["ESNext"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noImplicitUseStrict": false,
    "noStrictGenericChecks": false,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "resolvePackageJsonImports": false,
    "skipLibCheck": true,
    "strict": true,
    "target": "ESNext",
    "verbatimModuleSyntax": true
  }
}



================================================
FILE: turbo.json
================================================
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build:android": {
      "env": ["ORG_GRADLE_PROJECT_newArchEnabled"],
      "inputs": [
        "package.json",
        "android",
        "!android/build",
        "src/*.ts",
        "src/*.tsx",
        "example/package.json",
        "example/android",
        "!example/android/.gradle",
        "!example/android/build",
        "!example/android/app/build"
      ],
      "outputs": []
    },
    "build:ios": {
      "env": ["RCT_NEW_ARCH_ENABLED"],
      "inputs": [
        "package.json",
        "*.podspec",
        "ios",
        "src/*.ts",
        "src/*.tsx",
        "example/package.json",
        "example/ios",
        "!example/ios/build",
        "!example/ios/Pods"
      ],
      "outputs": []
    }
  }
}



================================================
FILE: .editorconfig
================================================
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs
# editorconfig.org

root = true

[*]

indent_style = space
indent_size = 2

end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true



================================================
FILE: .flowconfig
================================================
[Empty file]


================================================
FILE: .nvmrc
================================================
v20



================================================
FILE: .watchmanconfig
================================================
{}


================================================
FILE: .yarnrc.yml
================================================
nodeLinker: node-modules
nmHoistingLimits: workspaces

plugins:
  - path: .yarn/plugins/@yarnpkg/plugin-interactive-tools.cjs
    spec: "@yarnpkg/plugin-interactive-tools"
  - path: .yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs
    spec: "@yarnpkg/plugin-workspace-tools"

yarnPath: .yarn/releases/yarn-3.6.1.cjs



================================================
FILE: android/gradle.properties
================================================
CredentialsManager_kotlinVersion=2.0.21
CredentialsManager_minSdkVersion=24
CredentialsManager_targetSdkVersion=34
CredentialsManager_compileSdkVersion=35
CredentialsManager_ndkversion=27.1.12297006



================================================
FILE: android/src/main/AndroidManifest.xml
================================================
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.credentialsmanager">
</manifest>



================================================
FILE: android/src/main/AndroidManifestNew.xml
================================================
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
</manifest>



================================================
FILE: android/src/main/java/com/credentialsmanager/CredentialsManagerModuleImpl.kt
================================================
package com.credentialsmanager

class CredentialsManagerModuleImpl {
  companion object {
    const val NAME = "CredentialsManager"
  }
}



================================================
FILE: android/src/main/java/com/credentialsmanager/CredentialsManagerPackage.kt
================================================
package com.credentialsmanager

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
import java.util.HashMap

class CredentialsManagerPackage : BaseReactPackage() {
  override fun getModule(
    name: String,
    reactContext: ReactApplicationContext,
  ): NativeModule? =
    if (name == CredentialsManagerModuleImpl.NAME) {
      CredentialsManagerModule(reactContext)
    } else {
      null
    }

  override fun getReactModuleInfoProvider(): ReactModuleInfoProvider =
    ReactModuleInfoProvider {
      val moduleInfos: MutableMap<String, ReactModuleInfo> = HashMap()
      val isTurboModule = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
      moduleInfos[CredentialsManagerModuleImpl.NAME] =
        ReactModuleInfo(
          CredentialsManagerModuleImpl.NAME,
          CredentialsManagerModuleImpl.NAME,
          false, // canOverrideExistingModule
          false, // needsEagerInit
          false, // isCxxModule
          isTurboModule, // isTurboModule
        )
      moduleInfos
    }
}



================================================
FILE: android/src/main/java/com/credentialsmanager/handlers/CredentialHandler.kt
================================================
package com.credentialsmanager.handlers

import android.app.Activity
import android.content.Context
import android.util.Log
import androidx.credentials.ClearCredentialStateRequest
import androidx.credentials.CreatePasswordRequest
import androidx.credentials.CreatePublicKeyCredentialRequest
import androidx.credentials.CreatePublicKeyCredentialResponse
import androidx.credentials.CredentialManager
import androidx.credentials.CredentialOption
import androidx.credentials.CustomCredential
import androidx.credentials.GetCredentialRequest
import androidx.credentials.GetCredentialResponse
import androidx.credentials.GetPasswordOption
import androidx.credentials.GetPublicKeyCredentialOption
import androidx.credentials.PasswordCredential
import androidx.credentials.PublicKeyCredential
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.google.android.libraries.identity.googleid.GetGoogleIdOption
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential
import com.google.android.libraries.identity.googleid.GoogleIdTokenParsingException
import org.json.JSONObject

class CredentialHandler(
  private val context: Context,
) {
  private val credentialManager = CredentialManager.create(context)

  // Helper function to get activity context
  private fun getActivityContext(): Context {
    if (context is ReactApplicationContext) {
      val activity = context.currentActivity
      if (activity != null) {
        return activity
      } else {
        Log.w("CredentialManager", "No current activity found. UI operations may fail - ensure you're calling from the main/UI thread.")
      }
    } else {
      Log.w("CredentialManager", "Context is not ReactApplicationContext. UI operations may fail.")
    }
    // If we can't get an activity context, use the original context
    // This might still cause issues for UI operations, but it's better than null
    return context
  }

  suspend fun signOut() {
    credentialManager.clearCredentialState(ClearCredentialStateRequest())
  }

  suspend fun createPasskey(
    jsonString: String,
    preferImmediatelyAvailableCredentials: Boolean,
  ): ReadableMap? {
    Log.d("CredentialManager", "Creating passkey with request: $jsonString")
    
    try {
      val request =
        CreatePublicKeyCredentialRequest(
          requestJson = jsonString,
          preferImmediatelyAvailableCredentials = preferImmediatelyAvailableCredentials,
        )

      val activityContext = getActivityContext()
      val response =
        credentialManager.createCredential(
          activityContext,
          request,
        ) as CreatePublicKeyCredentialResponse

      return response.data.getString("androidx.credentials.BUNDLE_KEY_REGISTRATION_RESPONSE_JSON")?.let { json ->
        val jsonObject = Arguments.createMap()
        val parsedObject = JSONObject(json)

        parsedObject.keys().forEach { key ->
          jsonObject.putString(key, parsedObject.getString(key))
        }
        jsonObject
      }
    } catch (e: Exception) {
      Log.e("CredentialManager", "Error creating passkey", e)
      throw e
    }
  }

  suspend fun createPassword(
    username: String,
    password: String,
  ) {
    Log.d("CredentialManager", "Creating password credential for username: $username")
    
    try {
      val activityContext = getActivityContext()
      val createPasswordRequest = CreatePasswordRequest(id = username, password = password)
      credentialManager.createCredential(activityContext, createPasswordRequest)
    } catch (e: Exception) {
      Log.e("CredentialManager", "Error creating password credential", e)
      throw e
    }
  }

  suspend fun signIn(
    options: ReadableArray,
    params: ReadableMap,
  ): ReadableMap? {
    val credentialOptions = mutableListOf<CredentialOption>()
    for (i in 0 until options.size()) {
      when (options.getString(i)) {
        "passkeys" -> {
          if (params.hasKey("passkeys")) {
            val jsonString = params.getMap("passkeys")?.toString()
            jsonString?.let {
              credentialOptions.add(GetPublicKeyCredentialOption(it, null))
            }
          }
        }
        "password" -> {
          credentialOptions.add(GetPasswordOption())
        }
        "google-signin" -> {
          if (params.hasKey("googleSignIn")) {
            val googleParams = params.getMap("googleSignIn")
            val nonce = googleParams?.getString("nonce") ?: ""
            val serverClientId = googleParams?.getString("serverClientId") ?: ""
            val autoSelectEnabled = googleParams?.getBoolean("autoSelectEnabled") ?: false
            // Default to true for sign-in (show only authorized accounts)
            val filterByAuthorizedAccounts = if (googleParams?.hasKey("filterByAuthorizedAccounts") == true) {
              googleParams.getBoolean("filterByAuthorizedAccounts")
            } else {
              true
            }

            credentialOptions.add(
              getGoogleId(
                filterByAuthorizedAccounts,
                nonce,
                serverClientId,
                autoSelectEnabled,
              ),
            )
          }
        }
      }
    }

    val request = GetCredentialRequest(credentialOptions)
    val activityContext = getActivityContext()
    val result = credentialManager.getCredential(activityContext, request)
    return handleSignInResult(result)
  }

  suspend fun getSavedCredentials(jsonString: String): ReadableMap? {
    val getPublicKeyCredentialOption = GetPublicKeyCredentialOption(jsonString, null)
    val getPasswordOption = GetPasswordOption()
    val activityContext = getActivityContext()

    val result =
      credentialManager.getCredential(
        activityContext,
        GetCredentialRequest(
          listOf(
            getPublicKeyCredentialOption,
            getPasswordOption,
          ),
        ),
      )

    return handleSignInResult(result)
  }

  fun handleSignInResult(result: GetCredentialResponse): ReadableMap? {
    // Handle the successfully returned credential.
    val credential = result.credential
    Log.d("CredentialManager", "Handle results called")

    return when (credential) {
      is PublicKeyCredential -> {
        val cred = result.credential as PublicKeyCredential
        Arguments.createMap().apply {
          putString("type", "passkey")
          putString("authenticationResponseJson", cred.authenticationResponseJson)
        }
      }
      is PasswordCredential -> {
        val cred = result.credential as PasswordCredential
        Arguments.createMap().apply {
          putString("type", "password")
          putString("username", cred.id)
          putString("password", cred.password)
        }
      }
      // GoogleIdToken credential
      is CustomCredential -> {
        if (credential.type == GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL) {
          try {
            val googleIdTokenCredential =
              GoogleIdTokenCredential
                .createFrom(credential.data)
            Log.d("CredentialManager", "Google ID Token Credential ID: ${googleIdTokenCredential.id}")

            return Arguments.createMap().apply {
              putString("type", "google-signin")
              putString("id", googleIdTokenCredential.id)
              putString("idToken", googleIdTokenCredential.idToken)
              googleIdTokenCredential.displayName?.let { putString("displayName", it) }
              googleIdTokenCredential.familyName?.let { putString("familyName", it) }
              googleIdTokenCredential.givenName?.let { putString("givenName", it) }
              googleIdTokenCredential.profilePictureUri?.let { putString("profilePicture", it.toString()) }
              googleIdTokenCredential.phoneNumber?.let { putString("phoneNumber", it) }
            }
          } catch (e: GoogleIdTokenParsingException) {
            Log.e("CredentialManager", "Received an invalid google id token response", e)
            return null
          }
        } else {
          Log.e("CredentialManager", "Received an unexpected credential type")
          return null
        }
      }

      else -> {
        // Catch any unrecognized credential type here.
        Log.e("CredentialManager", "Unexpected type of credential")
        return null
      }
    }
  }

  fun getGoogleId(
    setFilterByAuthorizedAccounts: Boolean,
    nonce: String,
    serverClientId: String,
    autoSelectEnabled: Boolean,
  ): GetGoogleIdOption {
    Log.d("CredentialManager", "getGoogleId - setFilterByAuthorizedAccounts: $setFilterByAuthorizedAccounts  autoSelectEnabled: $autoSelectEnabled")

    return GetGoogleIdOption
      .Builder()
      .setFilterByAuthorizedAccounts(setFilterByAuthorizedAccounts)
      .setServerClientId(serverClientId)
      .setAutoSelectEnabled(autoSelectEnabled)
      .setNonce(nonce)
      .build()
  }

  suspend fun googleSignInRequest(googleIdOption: GetGoogleIdOption): GetCredentialResponse {
    val request: GetCredentialRequest =
      GetCredentialRequest
        .Builder()
        .addCredentialOption(googleIdOption)
        .build()

    val activityContext = getActivityContext()
    val result =
      credentialManager.getCredential(
        request = request,
        context = activityContext,
      )

    return result
  }
}



================================================
FILE: android/src/main/java/com/credentialsmanager/handlers/ErrorHandler.kt
================================================
package com.credentialsmanager.handlers

import android.util.Log
import androidx.credentials.exceptions.CreateCredentialCancellationException
import androidx.credentials.exceptions.CreateCredentialCustomException
import androidx.credentials.exceptions.CreateCredentialException
import androidx.credentials.exceptions.CreateCredentialInterruptedException
import androidx.credentials.exceptions.CreateCredentialProviderConfigurationException
import androidx.credentials.exceptions.CreateCredentialUnknownException
import androidx.credentials.exceptions.GetCredentialCancellationException
import androidx.credentials.exceptions.GetCredentialException
import androidx.credentials.exceptions.GetCredentialInterruptedException
import androidx.credentials.exceptions.GetCredentialUnknownException
import androidx.credentials.exceptions.publickeycredential.CreatePublicKeyCredentialDomException

object ErrorHandler {
  fun handleCredentialError(e: CreateCredentialException) {
    when (e) {
      is CreatePublicKeyCredentialDomException -> {
        Log.d("CredentialManager", "passkey DOM errors")
      }
      is CreateCredentialCancellationException -> {
        Log.d("CredentialManager", "User cancelled")
      }
      is CreateCredentialInterruptedException -> {
        Log.d("CredentialManager", "Retry process")
      }
      is CreateCredentialProviderConfigurationException -> {
        Log.d("CredentialManager", "Missing provider configuration")
      }
      is CreateCredentialUnknownException -> {
        Log.d("CredentialManager", "Unknown error")
      }
      is CreateCredentialCustomException -> {
        Log.d("CredentialManager", "Custom credential error")
      }
      else -> Log.w("CredentialManager", "Unexpected exception type ${e::class.java.name}")
    }
  }

  fun handleGetCredentialError(e: GetCredentialException) {
    when (e) {
      is GetCredentialCancellationException -> {
        Log.d("CredentialManager", "GetCredentialCancellationException")
      }
      is GetCredentialInterruptedException -> {
        Log.d("CredentialManager", "User interputted")
      }
      is GetCredentialUnknownException -> {
        Log.d("CredentialManager", "Unknown error")
      }

      else -> Log.w("CredentialManager", "Unexpected exception type ${e::class.java.name}")
    }
  }
}



================================================
FILE: android/src/newarch/java/com/credentialsmanager/CredentialsManagerModule.kt
================================================
package com.credentialsmanager
import android.util.Log
import androidx.credentials.exceptions.ClearCredentialException
import androidx.credentials.exceptions.CreateCredentialException
import androidx.credentials.exceptions.GetCredentialException
import androidx.credentials.exceptions.NoCredentialException
import com.credentialsmanager.handlers.CredentialHandler
import com.credentialsmanager.handlers.ErrorHandler
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class CredentialsManagerModule(
  reactContext: ReactApplicationContext,
) : NativeCredentialsManagerSpec(reactContext) {
  private val coroutineScope = CoroutineScope(Dispatchers.IO)
  private val credentialHandler = CredentialHandler(reactContext)

  private var implementation: CredentialsManagerModuleImpl = CredentialsManagerModuleImpl()

  override fun getName(): String = CredentialsManagerModuleImpl.NAME

  override fun signUpWithPasskeys(
    requestJson: ReadableMap,
    preferImmediatelyAvailableCredentials: Boolean,
    promise: Promise,
  ) {
    val jsonString = requestJson.toString()

    coroutineScope.launch {
      try {
        val response =
          credentialHandler.createPasskey(
            jsonString,
            preferImmediatelyAvailableCredentials,
          )

        response?.let {
          promise.resolve(it)
        } ?: promise.reject("ERROR", "No response received")
      } catch (e: CreateCredentialException) {
        ErrorHandler.handleCredentialError(e)
        promise.reject("ERROR", e.message.toString())
      }
    }
  }

  override fun signUpWithPassword(credObject: ReadableMap, promise: Promise) {
    val username = credObject.getString("username") ?: ""
    val password = credObject.getString("password") ?: ""
    
    if (username.isEmpty()) {
      promise.reject("INVALID_USERNAME", "Username cannot be empty")
      return
    }
    
    if (password.isEmpty()) {
      promise.reject("INVALID_PASSWORD", "Password cannot be empty")
      return
    }
    
    coroutineScope.launch {
      try {
        credentialHandler.createPassword(username, password)
        
        // Create success response
        val result = mapOf(
          "type" to "password",
          "username" to username,
          "success" to true
        )
        promise.resolve(result)
      } catch (e: CreateCredentialException) {
        ErrorHandler.handleCredentialError(e)
        promise.reject("CREDENTIAL_ERROR", e.message.toString())
      }
    }
  }

  override fun signIn(
    options: ReadableArray,
    params: ReadableMap,
    promise: Promise,
  ) {
    coroutineScope.launch {
      try {
        val data = credentialHandler.signIn(options = options, params = params)
        promise.resolve(data)
      } catch (e: GetCredentialException) {
        Log.e("CredentialManager", "Error during sign out", e)
        promise.reject("ERROR", e.message.toString())
      }
    }
  }


  override fun signOut(promise: Promise) {
    coroutineScope.launch {
      try {
        credentialHandler.signOut()
        promise.resolve(null)
      } catch (e: ClearCredentialException) {
        Log.e("CredentialManager", "Error during sign out", e)
        promise.reject("ERROR", e.message.toString())
      }
    }
  }

  override fun signUpWithGoogle(
    requestObject: ReadableMap,
    promise: Promise,
  ) {
    val nonce = requestObject.getString("nonce") ?: ""
    val serverClientId = requestObject.getString("serverClientId") ?: ""
    val autoSelectEnabled = requestObject.getBoolean("autoSelectEnabled")
    // Default to false for sign-up (show all accounts)
    val filterByAuthorizedAccounts = if (requestObject.hasKey("filterByAuthorizedAccounts")) {
      requestObject.getBoolean("filterByAuthorizedAccounts")
    } else {
      false
    }

    val googleIdOption =
      credentialHandler.getGoogleId(
        setFilterByAuthorizedAccounts = filterByAuthorizedAccounts,
        nonce = nonce,
        serverClientId = serverClientId,
        autoSelectEnabled = autoSelectEnabled,
      )
    coroutineScope.launch {
      try {
        val result = credentialHandler.googleSignInRequest(googleIdOption)
        val data = credentialHandler.handleSignInResult(result)
        promise.resolve(data)
      } catch (e: GetCredentialException) {
            Log.d("CredentialManager", "First sign in attempt failed", e)

        when (e) {
          is NoCredentialException -> {
            try {
              Log.d("CredentialManager", "NoCredentialException")
              val googleIdOption2 =
                credentialHandler.getGoogleId(
                  setFilterByAuthorizedAccounts = false,
                  nonce = nonce,
                  serverClientId = serverClientId,
                  autoSelectEnabled = autoSelectEnabled,
                )
              val result2 = credentialHandler.googleSignInRequest(googleIdOption2)
              val data2 = credentialHandler.handleSignInResult(result2)
              promise.resolve(data2)
            } catch (e2: GetCredentialException) {
              ErrorHandler.handleGetCredentialError(e2)
              Log.e("CredentialManager", "Error during sign in", e2)
              promise.reject("ERROR", e2.message.toString())
            }
          }
          else -> {
            ErrorHandler.handleGetCredentialError(e)
            Log.e("CredentialManager", "Error during sign in", e)
            promise.reject("ERROR", e.message.toString())
          }
        }
      }
    }
  }

  override fun signUpWithApple(params: ReadableMap, promise: Promise) {
    promise.reject(
      "PLATFORM_NOT_SUPPORTED",
      "Sign up with Apple is only supported on iOS devices"
    )
  }
}



================================================
FILE: android/src/oldarch/java/com/credentialsmanager/CredentialsManagerModule.kt
================================================
package com.credentialsmanager
import android.util.Log
import androidx.credentials.exceptions.ClearCredentialException
import androidx.credentials.exceptions.CreateCredentialException
import androidx.credentials.exceptions.GetCredentialException
import androidx.credentials.exceptions.NoCredentialException
import com.credentialsmanager.handlers.CredentialHandler
import com.credentialsmanager.handlers.ErrorHandler
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

@ReactModule(name = CredentialsManagerModuleImpl.NAME)
class CredentialsManagerModule(
  reactContext: ReactApplicationContext,
) : ReactContextBaseJavaModule(reactContext) {
  private val coroutineScope = CoroutineScope(Dispatchers.IO)
  private val credentialHandler = CredentialHandler(reactContext)

  private var implementation: CredentialsManagerModuleImpl = CredentialsManagerModuleImpl()

  override fun getName(): String = CredentialsManagerModuleImpl.NAME

  @ReactMethod
  fun signUpWithPasskeys(
    requestJson: ReadableMap,
    preferImmediatelyAvailableCredentials: Boolean,
    promise: Promise,
  ) {
    val jsonString = requestJson.toString()

    coroutineScope.launch {
      try {
        val response =
          credentialHandler.createPasskey(
            jsonString,
            preferImmediatelyAvailableCredentials,
          )

        response?.let {
          promise.resolve(it)
        } ?: promise.reject("ERROR", "No response received")
      } catch (e: CreateCredentialException) {
        ErrorHandler.handleCredentialError(e)
        promise.reject("ERROR", e.message.toString())
      }
    }
  }

  @ReactMethod
  fun signUpWithPassword(credObject: ReadableMap, promise: Promise) {
    val username = credObject.getString("username") ?: ""
    val password = credObject.getString("password") ?: ""
    
    if (username.isEmpty()) {
      promise.reject("INVALID_USERNAME", "Username cannot be empty")
      return
    }
    
    if (password.isEmpty()) {
      promise.reject("INVALID_PASSWORD", "Password cannot be empty")
      return
    }
    
    coroutineScope.launch {
      try {
        credentialHandler.createPassword(username, password)
        
        // Create success response
        val result = mapOf(
          "type" to "password",
          "username" to username,
          "success" to true
        )
        promise.resolve(result)
      } catch (e: CreateCredentialException) {
        ErrorHandler.handleCredentialError(e)
        promise.reject("CREDENTIAL_ERROR", e.message.toString())
      }
    }
  }

  @ReactMethod
   fun signIn(
    options: ReadableArray,
    params: ReadableMap,
    promise: Promise,
  ) {
    coroutineScope.launch {
      try {
        val data = credentialHandler.signIn(options = options, params = params)
        promise.resolve(data)
      } catch (e: GetCredentialException) {
        Log.e("CredentialManager", "Error during sign out", e)
        promise.reject("ERROR", e.message.toString())
      }
    }
  }


  // @ReactMethod
  // fun signInWithSavedCredentials(
  //   requestJson: ReadableMap,
  //   promise: Promise,
  // ) {
  //   val jsonString = requestJson.toString()
  //   coroutineScope.launch {
  //     val data = credentialHandler.getSavedCredentials(jsonString)
  //     promise.resolve(data)
  //   }
  // }

  @ReactMethod
  fun signOut(promise: Promise) {
    coroutineScope.launch {
      try {
        credentialHandler.signOut()
        promise.resolve(null)
      } catch (e: ClearCredentialException) {
        Log.e("CredentialManager", "Error during sign out", e)
        promise.reject("ERROR", e.message.toString())
      }
    }
  }

  @ReactMethod
  fun signUpWithGoogle(
    requestObject: ReadableMap,
    promise: Promise,
  ) {
    val nonce = requestObject.getString("nonce") ?: ""
    val serverClientId = requestObject.getString("serverClientId") ?: ""
    val autoSelectEnabled = requestObject.getBoolean("autoSelectEnabled")
    // Default to false for sign-up (show all accounts)
    val filterByAuthorizedAccounts = if (requestObject.hasKey("filterByAuthorizedAccounts")) {
      requestObject.getBoolean("filterByAuthorizedAccounts")
    } else {
      false
    }

    val googleIdOption =
      credentialHandler.getGoogleId(
        setFilterByAuthorizedAccounts = filterByAuthorizedAccounts,
        nonce = nonce,
        serverClientId = serverClientId,
        autoSelectEnabled = autoSelectEnabled,
      )
    coroutineScope.launch {
      try {
        val result = credentialHandler.googleSignInRequest(googleIdOption)
        val data = credentialHandler.handleSignInResult(result)
        promise.resolve(data)
      } catch (e: GetCredentialException) {
        when (e) {
          is NoCredentialException -> {
            try {
              Log.d("CredentialManager", "NoCredentialException")
              val googleIdOption =
                credentialHandler.getGoogleId(
                  setFilterByAuthorizedAccounts = filterByAuthorizedAccounts,
                  nonce = nonce,
                  serverClientId = serverClientId,
                  autoSelectEnabled = autoSelectEnabled,
                )
              val result = credentialHandler.googleSignInRequest(googleIdOption)
              val data = credentialHandler.handleSignInResult(result)
              promise.resolve(data)
            } catch (e: GetCredentialException) {
              ErrorHandler.handleGetCredentialError(e)
              Log.e("CredentialManager", "Error during sign in", e)
              promise.reject("ERROR", e.message.toString())
            }
          }
          else -> {
            ErrorHandler.handleGetCredentialError(e)
            Log.e("CredentialManager", "Error during sign in", e)
            promise.reject("ERROR", e.message.toString())
          }
        }
      }
    }
  }

  @ReactMethod
  fun signUpWithApple(params: ReadableMap, promise: Promise) {
    // Since this is an iOS-specific function, we just reject with an appropriate message on Android
    promise.reject(
      "PLATFORM_NOT_SUPPORTED",
      "Sign up with Apple is only supported on iOS devices"
    )
  }
}



================================================
FILE: example/README.md
================================================
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



================================================
FILE: example/app.json
================================================
{
  "name": "CredentialsManagerExample",
  "displayName": "CredentialsManagerExample"
}



================================================
FILE: example/babel.config.js
================================================
const path = require('path');
const { getConfig } = require('react-native-builder-bob/babel-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

module.exports = getConfig(
  {
    presets: ['module:@react-native/babel-preset'],
    plugins: [['module:react-native-dotenv']],
  },
  { root, pkg }
);



================================================
FILE: example/Gemfile
================================================
source 'https://rubygems.org'

# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version
ruby ">= 2.6.10"

# Exclude problematic versions of cocoapods and activesupport that causes build failures.
gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'
gem 'xcodeproj', '< 1.26.0'
gem 'concurrent-ruby', '< 1.3.4'



================================================
FILE: example/index.js
================================================
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);



================================================
FILE: example/jest.config.js
================================================
module.exports = {
  preset: 'react-native',
};



================================================
FILE: example/metro.config.js
================================================
const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = getConfig(getDefaultConfig(__dirname), {
  root,
  pkg,
  project: __dirname,
});



================================================
FILE: example/package.json
================================================
{
  "name": "react-native-credentials-manager-example",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "build:android": "react-native build-android --extra-params \"--no-daemon --console=plain -PreactNativeArchitectures=arm64-v8a\"",
    "build:ios": "react-native build-ios --scheme CredentialsManagerExample --mode Debug --extra-params \"-sdk iphonesimulator CC=clang CPLUSPLUS=clang++ LD=clang LDPLUSPLUS=clang++ GCC_OPTIMIZATION_LEVEL=0 GCC_PRECOMPILE_PREFIX_HEADER=YES ASSETCATALOG_COMPILER_OPTIMIZATION=time DEBUG_INFORMATION_FORMAT=dwarf COMPILER_INDEX_STORE_ENABLE=NO\""
  },
  "dependencies": {
    "react": "18.3.1",
    "react-native": "0.77.0"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.3",
    "@babel/runtime": "^7.25.0",
    "@react-native-community/cli": "15.0.1",
    "@react-native-community/cli-platform-android": "15.0.1",
    "@react-native-community/cli-platform-ios": "15.0.1",
    "@react-native/babel-preset": "0.77.0",
    "@react-native/metro-config": "0.77.0",
    "@react-native/typescript-config": "0.77.0",
    "react-native-builder-bob": "^0.32.0"
  },
  "engines": {
    "node": ">=18"
  }
}



================================================
FILE: example/react-native.config.js
================================================
const path = require('path');
const pkg = require('../package.json');

module.exports = {
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
  },
  dependencies: {
    [pkg.name]: {
      root: path.join(__dirname, '..'),
      platforms: {
        // Codegen script incorrectly fails without this
        // So we explicitly specify the platforms with empty object
        ios: {},
        android: {},
      },
    },
  },
};



================================================
FILE: example/.watchmanconfig
================================================
{}



================================================
FILE: example/android/gradle.properties
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

newArchEnabled=true


================================================
FILE: example/android/gradlew
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
APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s
' "$PWD" ) || exit

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

CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar


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
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '${Hostname}' itself on the command line.

set -- \
        "-Dorg.gradle.appname=$APP_BASE_NAME" \
        -classpath "$CLASSPATH" \
        org.gradle.wrapper.GradleWrapperMain \
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
FILE: example/android/gradlew.bat
================================================
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

set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar


@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*

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
FILE: example/android/app/debug.keystore
================================================
[Binary file]


================================================
FILE: example/android/app/proguard-rules.pro
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
-if class androidx.credentials.CredentialManager
-keep class androidx.credentials.playservices.** {
  *;
}


================================================
FILE: example/android/app/src/debug/AndroidManifest.xml
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
FILE: example/android/app/src/main/AndroidManifest.xml
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
FILE: example/android/app/src/main/java/credentialsmanager/example/MainActivity.kt
================================================
package credentialsmanager.example

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "CredentialsManagerExample"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate = DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}



================================================
FILE: example/android/app/src/main/java/credentialsmanager/example/MainApplication.kt
================================================
package credentialsmanager.example

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader

class MainApplication :
  Application(),
  ReactApplication {
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
    SoLoader.init(this, OpenSourceMergedSoMapping)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
  }
}



================================================
FILE: example/android/app/src/main/res/drawable/rn_edit_text_material.xml
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
FILE: example/android/app/src/main/res/values/strings.xml
================================================
<resources>
    <string name="app_name">CredentialsManagerExample</string>
</resources>



================================================
FILE: example/android/app/src/main/res/values/styles.xml
================================================
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>
    </style>

</resources>



================================================
FILE: example/android/gradle/wrapper/gradle-wrapper.properties
================================================
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.10.2-all.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists



================================================
FILE: example/ios/Podfile
================================================
ENV['RCT_NEW_ARCH_ENABLED'] = '1'

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

target 'CredentialsManagerExample' do
  config = use_native_modules!

  use_react_native!(
    :path => config[:reactNativePath],
    # An absolute path to your application root.
    :app_path => "#{Pod::Config.instance.installation_root}/.."
  )


  pre_install do |installer|
    system("cd ../../ && npx bob build --target codegen")
  end

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
FILE: example/ios/.xcode.env
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
FILE: example/ios/.xcode.env.local
================================================
export NODE_BINARY=/opt/homebrew/Cellar/node/24.2.0/bin/node



================================================
FILE: example/ios/CredentialsManagerExample/AppDelegate.swift
================================================
import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "CredentialsManagerExample"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

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
FILE: example/ios/CredentialsManagerExample/CredentialsManagerExample.entitlements
================================================
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.developer.applesignin</key>
	<array>
		<string>Default</string>
	</array>
	<key>com.apple.developer.associated-domains</key>
	<array>
		<string>webcredentials:www.benjamineruvieru.com</string>
	</array>
</dict>
</plist>



================================================
FILE: example/ios/CredentialsManagerExample/Info.plist
================================================
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleDisplayName</key>
	<string>CredentialsManagerExample</string>
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
FILE: example/ios/CredentialsManagerExample/LaunchScreen.storyboard
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
                            <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="CredentialsManagerExample" textAlignment="center" lineBreakMode="middleTruncation" baselineAdjustment="alignBaselines" minimumFontSize="18" translatesAutoresizingMaskIntoConstraints="NO" id="GJd-Yh-RWb">
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
FILE: example/ios/CredentialsManagerExample/PrivacyInfo.xcprivacy
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
FILE: example/ios/CredentialsManagerExample/Images.xcassets/Contents.json
================================================
{
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}



================================================
FILE: example/ios/CredentialsManagerExample/Images.xcassets/AppIcon.appiconset/Contents.json
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
FILE: example/src/App.tsx
================================================
import { View, StyleSheet, Button, Platform } from 'react-native';
import {
  signUpWithPasskeys,
  signUpWithPassword,
  signUpWithGoogle,
  signUpWithApple,
  signOut,
  signIn,
} from 'react-native-credentials-manager';
import {
  generateTestRegistrationRequest,
  generateTestAuthenticationRequest,
} from './helpers/passkeyTestHelper';

const WEB_CLIENT_ID = process.env.WEB_CLIENT_ID || '';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Signup With Passkey"
        onPress={async () => {
          try {
            // Use the helper to generate a valid registration request
            const validRequest = generateTestRegistrationRequest();
            const res = await signUpWithPasskeys(validRequest);
            console.log(JSON.stringify(res));
            console.log(res);
          } catch (e) {
            console.log(e);
          }
        }}
      />
      {Platform.OS === 'android' && (
        <Button
          title="Register Password"
          onPress={async () => {
            try {
              const result = await signUpWithPassword({
                username: 'User1',
                password: 'Password123!',
              });
              console.log('Password registration result:', result);
            } catch (e) {
              console.error('Password registration error:', e);
            }
          }}
        />
      )}
      <Button
        title="Signin"
        onPress={async () => {
          try {
            // Use the helper to generate a valid authentication request
            const validAuthRequest = generateTestAuthenticationRequest();
            // Example 1: Using multiple auth options (returns Credential union type)
            const credential = await signIn(
              ['passkeys', 'password', 'google-signin', 'apple-signin'],
              {
                passkeys: validAuthRequest,
                googleSignIn: {
                  serverClientId: WEB_CLIENT_ID,
                  autoSelectEnabled: true,
                  // Show only accounts that have previously authorized the app
                  filterByAuthorizedAccounts: true,
                },
                appleSignIn: {
                  requestedScopes: ['fullName', 'email'],
                },
              }
            );

            if (credential.type === 'passkey') {
              console.log('Passkey:', credential.authenticationResponseJson);
            } else if (credential.type === 'password') {
              console.log('Password credentials:', {
                username: credential.username,
                password: credential.password,
              });
            } else if (credential.type === 'google-signin') {
              console.log('Google credentials:', {
                id: credential.id,
                idToken: credential.idToken,
                displayName: credential.displayName,
                familyName: credential.familyName,
                givenName: credential.givenName,
                profilePicture: credential.profilePicture,
                phoneNumber: credential.phoneNumber,
              });
            } else if (credential.type === 'apple-signin') {
              console.log('Apple credentials:', {
                id: credential.id,
                idToken: credential.idToken,
                displayName: credential.displayName,
                familyName: credential.familyName,
                givenName: credential.givenName,
                email: credential.email,
              });
            }

            // Example 2: Using single auth option (returns specific type)
            // const passkeyCredential = await signIn(['passkeys'], {
            //   passkeys: validAuthRequest,
            // });
            // // TypeScript knows this is PasskeyCredential, so we can access properties directly
            // console.log('Passkey:', passkeyCredential.authenticationResponseJson);
          } catch (e) {
            console.error(e);
          }
        }}
      />

      {Platform.OS === 'android' && (
        <Button
          title={'SignUp With Google'}
          onPress={async () => {
            try {
              const credential = await signUpWithGoogle({
                serverClientId: WEB_CLIENT_ID,
                autoSelectEnabled: false,
                // Show all Google accounts on the device, not just authorized ones
                filterByAuthorizedAccounts: false,
              });
              if (credential.type === 'google-signin') {
                console.log('Google credentials:', {
                  id: credential.id,
                  idToken: credential.idToken,
                  displayName: credential.displayName,
                  familyName: credential.familyName,
                  givenName: credential.givenName,
                  profilePicture: credential.profilePicture,
                  phoneNumber: credential.phoneNumber,
                });
              }
            } catch (e) {
              console.error(e);
            }
          }}
        />
      )}

      {Platform.OS === 'ios' && (
        <Button
          title="SignUp With Apple"
          onPress={async () => {
            try {
              const credential = await signUpWithApple({
                requestedScopes: ['fullName', 'email'],
              });
              console.log('Apple credentials:', {
                id: credential.id,
                idToken: credential.idToken,
                displayName: credential.displayName,
                familyName: credential.familyName,
                givenName: credential.givenName,
                email: credential.email,
              });
            } catch (e) {
              console.error(e);
            }
          }}
        />
      )}

      {Platform.OS === 'android' && (
        <Button
          title="Signout"
          onPress={async () => {
            try {
              await signOut();
            } catch (e) {
              console.error(e);
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



================================================
FILE: example/src/helpers/passkeyTestHelper.ts
================================================
/**
 * Generates a proper base64 challenge string
 * @returns A valid base64-encoded challenge string
 */
export function generateValidChallenge(): string {
  // Generate random bytes
  const randomBytes = new Uint8Array(32);
  for (let i = 0; i < randomBytes.length; i++) {
    randomBytes[i] = Math.floor(Math.random() * 256);
  }

  // Convert to base64
  return bytesToBase64(randomBytes);
}

/**
 * Convert Uint8Array to base64 string
 */
function bytesToBase64(bytes: Uint8Array): string {
  const binString = Array.from(bytes)
    .map((byte) => String.fromCharCode(byte))
    .join('');

  return btoa(binString);
}

/**
 * Generate a valid RP ID for testing
 */
export function getTestRpId(): string {
  return 'www.benjamineruvieru.com';
}

/**
 * Generate a valid registration request for testing
 */
export function generateTestRegistrationRequest(
  username: string = 'testuser'
): any {
  const userId = bytesToBase64(
    new TextEncoder().encode(
      `user_id_${Math.random().toString(36).substring(2, 15)}`
    )
  );

  return {
    challenge: generateValidChallenge(),
    rp: {
      name: 'Test App',
      id: getTestRpId(),
    },
    user: {
      id: userId,
      name: username,
      displayName: username,
    },
    pubKeyCredParams: [
      {
        type: 'public-key',
        alg: -7, // ES256
      },
      {
        type: 'public-key',
        alg: -257, // RS256
      },
    ],
    timeout: 60000, // 1 minute is usually enough for testing
    attestation: 'none',
    excludeCredentials: [],
    authenticatorSelection: {
      residentKey: 'preferred',
      requireResidentKey: false,
      userVerification: 'preferred',
      authenticatorAttachment: 'platform',
    },
  };
}

/**
 * Generate a valid authentication request for testing
 */
export function generateTestAuthenticationRequest(): any {
  return {
    challenge: generateValidChallenge(),
    timeout: 60000,
    userVerification: 'required',
    rpId: getTestRpId(),
  };
}



================================================
FILE: ios/CredentialsManager.h
================================================
#import <Foundation/Foundation.h>
#import <AuthenticationServices/AuthenticationServices.h>
#import "generated/RNCredentialsManagerSpec/RNCredentialsManagerSpec.h"

@interface CredentialsManager : NSObject <NativeCredentialsManagerSpec, ASAuthorizationControllerDelegate, ASAuthorizationControllerPresentationContextProviding>

@property (nonatomic, strong) ASPresentationAnchor authenticationAnchor;
@property (nonatomic, copy) RCTPromiseResolveBlock currentResolve;
@property (nonatomic, copy) RCTPromiseRejectBlock currentReject;
@property (nonatomic, strong) NSString *relyingPartyIdentifier;

@end



================================================
FILE: ios/CredentialsManager.mm
================================================
#import "CredentialsManager.h"
#import <React/RCTUtils.h>
#import <React/RCTLog.h>
#import <AuthenticationServices/AuthenticationServices.h>

@implementation CredentialsManager

RCT_EXPORT_MODULE()

- (instancetype)init {
    self = [super init];
    if (self) {
        // Default relying party identifier - should be configurable
        self.relyingPartyIdentifier = @"www.benjamineruvieru.com";
        
        // Get the main window as the authentication anchor
        dispatch_async(dispatch_get_main_queue(), ^{
            UIWindow *keyWindow = nil;
            for (UIWindowScene *windowScene in [UIApplication sharedApplication].connectedScenes) {
                if (windowScene.activationState == UISceneActivationStateForegroundActive) {
                    for (UIWindow *window in windowScene.windows) {
                        if (window.isKeyWindow) {
                            keyWindow = window;
                            break;
                        }
                    }
                }
            }
            self.authenticationAnchor = keyWindow;
        });
    }
    return self;
}

#pragma mark - TurboModule

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeCredentialsManagerSpecJSI>(params);
}

#pragma mark - NativeCredentialsManagerSpec

- (void)signUpWithPasskeys:(NSDictionary *)requestJson
preferImmediatelyAvailableCredentials:(BOOL)preferImmediatelyAvailableCredentials
                   resolve:(RCTPromiseResolveBlock)resolve
                    reject:(RCTPromiseRejectBlock)reject {
    
    dispatch_async(dispatch_get_main_queue(), ^{
        self.currentResolve = resolve;
        self.currentReject = reject;
        
        // Extract challenge and user info from requestJson
        NSString *challengeString = requestJson[@"challenge"];
        NSDictionary *userInfo = requestJson[@"user"];
        NSDictionary *rpInfo = requestJson[@"rp"];
        
        if (!challengeString || !userInfo || !rpInfo) {
            reject(@"INVALID_REQUEST", @"Missing required fields in request JSON", nil);
            return;
        }
        
        // Decode base64 challenge
        NSData *challenge = [[NSData alloc] initWithBase64EncodedString:challengeString options:0];
        if (!challenge) {
            reject(@"INVALID_CHALLENGE", @"Invalid base64 challenge", nil);
            return;
        }
        
        // Extract user information
        NSString *userName = userInfo[@"name"];
        NSString *userIdString = userInfo[@"id"];
        
        // Decode user ID
        NSData *userId = [[NSData alloc] initWithBase64EncodedString:userIdString options:0];
        if (!userId) {
            // If not base64, use the string directly
            userId = [userIdString dataUsingEncoding:NSUTF8StringEncoding];
        }
        
        // Update relying party identifier
        NSString *rpId = rpInfo[@"id"];
        if (rpId) {
            self.relyingPartyIdentifier = rpId;
        }
        
        // Create the passkey registration request using Apple's Authentication Services
        ASAuthorizationPlatformPublicKeyCredentialProvider *provider = 
            [[ASAuthorizationPlatformPublicKeyCredentialProvider alloc] initWithRelyingPartyIdentifier:self.relyingPartyIdentifier];
        
        ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest *registrationRequest = 
            [provider createCredentialRegistrationRequestWithChallenge:challenge name:userName userID:userId];
        
        // Configure the request 
        registrationRequest.userVerificationPreference = ASAuthorizationPublicKeyCredentialUserVerificationPreferenceRequired;
        
        // Create and configure the authorization controller
        ASAuthorizationController *authController = [[ASAuthorizationController alloc] initWithAuthorizationRequests:@[registrationRequest]];
        authController.delegate = self;
        authController.presentationContextProvider = self;
        
        // Perform the request
        [authController performRequests];
    });
}

- (void)signUpWithPassword:(JS::NativeCredentialsManager::CredObject &)credObject
                   resolve:(RCTPromiseResolveBlock)resolve
                    reject:(RCTPromiseRejectBlock)reject {
    // Apple's Authentication Services only supports AutoFill passwords, not manual credential storage
    // Manual keychain storage is not part of Authentication Services framework
    reject(@"UNSUPPORTED_OPERATION", @"Manual password storage is not supported. Use AutoFill passwords through signIn method instead.", nil);
}

- (void)signIn:(NSArray *)options
        params:(JS::NativeCredentialsManager::SpecSignInParams &)params
       resolve:(RCTPromiseResolveBlock)resolve
        reject:(RCTPromiseRejectBlock)reject {
    
    id passkeyParams = params.passkeys();
    
    dispatch_async(dispatch_get_main_queue(), ^{
        self.currentResolve = resolve;
        self.currentReject = reject;
        
        NSMutableArray<ASAuthorizationRequest *> *authRequests = [[NSMutableArray alloc] init];
        
        for (NSString *option in options) {
            if ([option isEqualToString:@"passkeys"]) {
                if (!passkeyParams || ![passkeyParams isKindOfClass:[NSDictionary class]]) {
                    RCTLogError(@"Missing or invalid passkeys parameters");
                    continue;
                }
                
                NSDictionary *passkeyDict = (NSDictionary *)passkeyParams;
                NSString *challengeString = passkeyDict[@"challenge"];
                
                if (!challengeString || ![challengeString isKindOfClass:[NSString class]]) {
                    RCTLogError(@"Missing or invalid challenge in passkeys parameters");
                    continue;
                }
                
                NSData *challenge = [[NSData alloc] initWithBase64EncodedString:challengeString options:0];
                
                if (challenge) {
                    // Update relying party identifier if provided
                    NSString *rpId = passkeyDict[@"rpId"];
                    if (rpId && [rpId isKindOfClass:[NSString class]]) {
                        self.relyingPartyIdentifier = rpId;
                    }
                    
                    ASAuthorizationPlatformPublicKeyCredentialProvider *provider = 
                        [[ASAuthorizationPlatformPublicKeyCredentialProvider alloc] initWithRelyingPartyIdentifier:self.relyingPartyIdentifier];
                    
                    ASAuthorizationPlatformPublicKeyCredentialAssertionRequest *assertionRequest = 
                        [provider createCredentialAssertionRequestWithChallenge:challenge];
                    assertionRequest.userVerificationPreference = ASAuthorizationPublicKeyCredentialUserVerificationPreferenceRequired;
                    
                    [authRequests addObject:assertionRequest];
                } else {
                    RCTLogError(@"Failed to decode challenge for passkey authentication");
                }
            } else if ([option isEqualToString:@"password"]) {
                // Use Apple's AutoFill password provider (not manual keychain)
                ASAuthorizationPasswordProvider *passwordProvider = [[ASAuthorizationPasswordProvider alloc] init];
                ASAuthorizationPasswordRequest *passwordRequest = [passwordProvider createRequest];
                [authRequests addObject:passwordRequest];
            } else if ([option isEqualToString:@"apple-signin"]) {
                ASAuthorizationAppleIDProvider *appleIDProvider = [[ASAuthorizationAppleIDProvider alloc] init];
                ASAuthorizationAppleIDRequest *appleIDRequest = [appleIDProvider createRequest];
                
                NSArray<ASAuthorizationScope> *defaultScopes = @[ASAuthorizationScopeFullName, ASAuthorizationScopeEmail];
                appleIDRequest.requestedScopes = defaultScopes;
                
                [authRequests addObject:appleIDRequest];
            } else if ([option isEqualToString:@"google-signin"]) {
                // Google Sign In is not part of Apple's Authentication Services framework
                RCTLogError(@"Google Sign In is not supported on iOS. Use Apple Sign In instead.");
                continue;
            }
        }
        
        if (authRequests.count == 0) {
            reject(@"NO_AUTH_METHODS", @"No valid authentication methods provided", nil);
            return;
        }
        
        // Create and configure the authorization controller
        ASAuthorizationController *authController = [[ASAuthorizationController alloc] initWithAuthorizationRequests:authRequests];
        authController.delegate = self;
        authController.presentationContextProvider = self;
        
        // Perform the request
        [authController performRequests];
    });
}

- (void)signUpWithGoogle:(JS::NativeCredentialsManager::GoogleSignInParams &)params
                 resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject {
    // Google Sign In is not part of Apple's Authentication Services framework
    reject(@"UNSUPPORTED_OPERATION", @"Google Sign In is not available on iOS. Use Apple Sign In instead.", nil);
}

- (void)signUpWithApple:(JS::NativeCredentialsManager::AppleSignInParams &)params
                resolve:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject {
    
    dispatch_async(dispatch_get_main_queue(), ^{
        self.currentResolve = resolve;
        self.currentReject = reject;
        
        ASAuthorizationAppleIDProvider *appleIDProvider = [[ASAuthorizationAppleIDProvider alloc] init];
        ASAuthorizationAppleIDRequest *appleIDRequest = [appleIDProvider createRequest];
        
        appleIDRequest.requestedScopes = @[ASAuthorizationScopeFullName, ASAuthorizationScopeEmail];
        
        ASAuthorizationController *authController = [[ASAuthorizationController alloc] initWithAuthorizationRequests:@[appleIDRequest]];
        authController.delegate = self;
        authController.presentationContextProvider = self;
        
        [authController performRequests];
    });
}

- (void)signOut:(RCTPromiseResolveBlock)resolve
         reject:(RCTPromiseRejectBlock)reject {
    // Apple's Authentication Services doesn't provide a direct sign-out method
    // Sign-out is typically handled at the application level
    // AutoFill passwords and passkeys are managed by the system
    resolve([NSNull null]);
}

#pragma mark - ASAuthorizationControllerDelegate

- (void)authorizationController:(ASAuthorizationController *)controller didCompleteWithAuthorization:(ASAuthorization *)authorization {
    if (!self.currentResolve) {
        return;
    }
    
    RCTPromiseResolveBlock resolve = self.currentResolve;
    self.currentReject = nil;
    self.currentResolve = nil;
    
    if ([authorization.credential isKindOfClass:[ASAuthorizationPlatformPublicKeyCredentialRegistration class]]) {
        // Passkey registration - handled by Apple's Authentication Services
        ASAuthorizationPlatformPublicKeyCredentialRegistration *registration = (ASAuthorizationPlatformPublicKeyCredentialRegistration *)authorization.credential;
        
        NSDictionary *result = @{
            @"id": registration.credentialID ? [registration.credentialID base64EncodedStringWithOptions:0] : @"",
            @"rawId": registration.credentialID ? [registration.credentialID base64EncodedStringWithOptions:0] : @"",
            @"response": @{
                @"attestationObject": registration.rawAttestationObject ? [registration.rawAttestationObject base64EncodedStringWithOptions:0] : @"",
                @"clientDataJSON": registration.rawClientDataJSON ? [registration.rawClientDataJSON base64EncodedStringWithOptions:0] : @""
            },
            @"type": @"public-key"
        };
        
        resolve(result);
        return;
    } else if ([authorization.credential isKindOfClass:[ASAuthorizationPlatformPublicKeyCredentialAssertion class]]) {
        // Passkey authentication - handled by Apple's Authentication Services
        ASAuthorizationPlatformPublicKeyCredentialAssertion *assertion = (ASAuthorizationPlatformPublicKeyCredentialAssertion *)authorization.credential;
        
        NSDictionary *result = @{
            @"type": @"passkey",
            @"authenticationResponseJson": [self createAuthenticationResponseJSON:assertion]
        };
        
        resolve(result);
        return;
    } else if ([authorization.credential isKindOfClass:[ASPasswordCredential class]]) {
        // AutoFill password authentication - handled by Apple's Authentication Services
        ASPasswordCredential *passwordCredential = (ASPasswordCredential *)authorization.credential;
        
        NSDictionary *result = @{
            @"type": @"password",
            @"username": passwordCredential.user,
            @"password": passwordCredential.password
        };
        
        resolve(result);
        return;
    } else if ([authorization.credential isKindOfClass:[ASAuthorizationAppleIDCredential class]]) {
        // Apple Sign In - officially supported by Authentication Services
        ASAuthorizationAppleIDCredential *appleIDCredential = (ASAuthorizationAppleIDCredential *)authorization.credential;
        
        NSMutableDictionary *result = [@{
            @"type": @"apple-signin",
            @"id": appleIDCredential.user,
            @"idToken": appleIDCredential.identityToken ? [[NSString alloc] initWithData:appleIDCredential.identityToken encoding:NSUTF8StringEncoding] : @""
        } mutableCopy];
        
        if (appleIDCredential.fullName) {
            if (appleIDCredential.fullName.givenName) {
                result[@"givenName"] = appleIDCredential.fullName.givenName;
            }
            if (appleIDCredential.fullName.familyName) {
                result[@"familyName"] = appleIDCredential.fullName.familyName;
            }
            if (appleIDCredential.fullName.givenName || appleIDCredential.fullName.familyName) {
                NSString *fullName = [NSString stringWithFormat:@"%@ %@", 
                    appleIDCredential.fullName.givenName ?: @"", 
                    appleIDCredential.fullName.familyName ?: @""];
                result[@"displayName"] = [fullName stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]];
            }
        }
        
        if (appleIDCredential.email) {
            result[@"email"] = appleIDCredential.email;
        }
        
        resolve([result copy]);
        return;
    }
    
    // If we reach here, we couldn't handle the credential type
    resolve(@{@"type": @"unknown"});
}

- (void)authorizationController:(ASAuthorizationController *)controller didCompleteWithError:(NSError *)error {
    if (!self.currentReject) {
        return;
    }
    
    RCTPromiseRejectBlock reject = self.currentReject;
    self.currentResolve = nil;
    self.currentReject = nil;
    
    NSString *errorCode = @"UNKNOWN_ERROR";
    NSString *errorMessage = error.localizedDescription;
    
    if ([error.domain isEqualToString:ASAuthorizationErrorDomain]) {
        switch (error.code) {
            case ASAuthorizationErrorCanceled:
                errorCode = @"USER_CANCELED";
                errorMessage = @"User canceled the authorization request";
                break;
            case ASAuthorizationErrorFailed:
                errorCode = @"AUTHORIZATION_FAILED";
                break;
            case ASAuthorizationErrorInvalidResponse:
                errorCode = @"INVALID_RESPONSE";
                break;
            case ASAuthorizationErrorNotHandled:
                errorCode = @"NOT_HANDLED";
                break;
            case ASAuthorizationErrorUnknown:
                errorCode = @"UNKNOWN_ERROR";
                break;
        }
    }
    
    reject(errorCode, errorMessage, error);
}

#pragma mark - ASAuthorizationControllerPresentationContextProviding

- (ASPresentationAnchor)presentationAnchorForAuthorizationController:(ASAuthorizationController *)controller {
    if (self.authenticationAnchor) {
        return self.authenticationAnchor;
    }
    
    // Fallback to finding a key window
    UIWindow *keyWindow = nil;
    for (UIWindowScene *windowScene in [UIApplication sharedApplication].connectedScenes) {
        if (windowScene.activationState == UISceneActivationStateForegroundActive) {
            for (UIWindow *window in windowScene.windows) {
                if (window.isKeyWindow) {
                    keyWindow = window;
                    break;
                }
            }
        }
    }
    
    return keyWindow ?: [[UIApplication sharedApplication] windows].firstObject;
}

#pragma mark - Helper Methods

- (NSString *)createAuthenticationResponseJSON:(ASAuthorizationPlatformPublicKeyCredentialAssertion *)assertion {
    NSDictionary *response = @{
        @"id": assertion.credentialID ? [assertion.credentialID base64EncodedStringWithOptions:0] : @"",
        @"rawId": assertion.credentialID ? [assertion.credentialID base64EncodedStringWithOptions:0] : @"",
        @"response": @{
            @"authenticatorData": assertion.rawAuthenticatorData ? [assertion.rawAuthenticatorData base64EncodedStringWithOptions:0] : @"",
            @"clientDataJSON": assertion.rawClientDataJSON ? [assertion.rawClientDataJSON base64EncodedStringWithOptions:0] : @"",
            @"signature": assertion.signature ? [assertion.signature base64EncodedStringWithOptions:0] : @"",
            @"userHandle": assertion.userID ? [assertion.userID base64EncodedStringWithOptions:0] : @""
        },
        @"type": @"public-key"
    };
    
    NSError *error;
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:response options:0 error:&error];
    if (error) {
        return @"{}";
    }
    
    return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
}

@end



================================================
FILE: src/index.tsx
================================================
import CredentialsManager from './NativeCredentialsManager';
import type {
  Credential,
  GoogleCredential,
  AppleCredential,
  SignInOption,
  PasskeyCredential,
  PasswordCredential,
} from './NativeCredentialsManager';
import { Platform } from 'react-native';

type GoogleSignInParams = {
  nonce?: string;
  serverClientId: string;
  autoSelectEnabled?: boolean;
  filterByAuthorizedAccounts?: boolean;
};

type AppleSignInParams = {
  nonce?: string;
  requestedScopes?: ('fullName' | 'email')[];
};

type CredentialMap = {
  'passkeys': PasskeyCredential;
  'password': PasswordCredential;
  'google-signin': GoogleCredential;
  'apple-signin': AppleCredential;
};

type SignInResult<T extends readonly SignInOption[]> = CredentialMap[T[number]];

export function signUpWithPasskeys(
  requestJson: Object,
  preferImmediatelyAvailableCredentials: boolean = false
): Promise<Object> {
  return CredentialsManager.signUpWithPasskeys(
    requestJson,
    preferImmediatelyAvailableCredentials
  );
}

export function signUpWithPassword({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<Object> {
  if (Platform.OS === 'ios') {
    return Promise.reject(
      new Error(
        'Manual password storage is not supported on iOS. Use AutoFill passwords through signIn method instead.'
      )
    );
  }
  return CredentialsManager.signUpWithPassword({ password, username });
}

export function signIn<T extends readonly SignInOption[]>(
  options: T,
  params: {
    passkeys?: Object;
    googleSignIn?: GoogleSignInParams;
    appleSignIn?: AppleSignInParams;
  }
): Promise<SignInResult<T>> {
  const signInParams: {
    passkeys?: Object;
    googleSignIn?: {
      serverClientId: string;
      nonce: string;
      autoSelectEnabled: boolean;
      filterByAuthorizedAccounts: boolean;
    };
    appleSignIn?: {
      nonce: string;
      requestedScopes: ('fullName' | 'email')[];
    };
  } = {
    passkeys: params.passkeys,
  };

  if (options.includes('google-signin')) {
    signInParams.googleSignIn = {
      serverClientId: params.googleSignIn?.serverClientId ?? '',
      nonce: params.googleSignIn?.nonce ?? '',
      autoSelectEnabled: params.googleSignIn?.autoSelectEnabled ?? true,
      filterByAuthorizedAccounts:
        params.googleSignIn?.filterByAuthorizedAccounts ?? true,
    };
  }

  // If we have Apple Sign In option on iOS, add Apple params
  if (Platform.OS === 'ios' && options.includes('apple-signin')) {
    signInParams.appleSignIn = {
      nonce: params.appleSignIn?.nonce ?? '',
      requestedScopes: params.appleSignIn?.requestedScopes ?? [
        'fullName',
        'email',
      ],
    };
  }

  return CredentialsManager.signIn([...options], signInParams) as Promise<
    SignInResult<T>
  >;
}

export function signUpWithGoogle(
  params: GoogleSignInParams
): Promise<GoogleCredential> {
  if (Platform.OS === 'ios') {
    return Promise.reject(
      new Error(
        'Google Sign In is only available on Android. Use signUpWithApple on iOS.'
      )
    );
  }

  return CredentialsManager.signUpWithGoogle({
    ...params,
    nonce: params.nonce ?? '',
    autoSelectEnabled: params.autoSelectEnabled ?? true,
    filterByAuthorizedAccounts: params.filterByAuthorizedAccounts ?? false,
  });
}

export function signUpWithApple(
  params: AppleSignInParams = {}
): Promise<AppleCredential> {
  if (Platform.OS !== 'ios') {
    return Promise.reject(
      new Error(
        'Apple Sign In is only available on iOS. Use signUpWithGoogle on Android.'
      )
    );
  }

  // Call the native signUpWithApple method directly - uses Apple's Authentication Services
  return CredentialsManager.signUpWithApple({
    nonce: params.nonce || '',
    requestedScopes: params.requestedScopes || ['fullName', 'email'],
  });
}

export function signOut(): Promise<null> {
  return CredentialsManager.signOut();
}

// Export types
export type {
  Credential,
  GoogleCredential,
  AppleCredential,
  SignInOption,
  GoogleSignInParams,
  AppleSignInParams,
  PasskeyCredential,
  PasswordCredential,
};



================================================
FILE: src/NativeCredentialsManager.ts
================================================
import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type SignInOption =
  | 'passkeys'
  | 'password'
  | 'google-signin'
  | 'apple-signin';

// Password authentication types
type CredObject = {
  username: string;
  password: string;
};

export type PasswordCredential = {
  type: 'password';
  username: string;
  password: string;
};

// Passkey authentication types
export type PasskeyCredential = {
  type: 'passkey';
  authenticationResponseJson: string;
};

// Google Sign In types
type GoogleSignInParams = {
  nonce: string;
  serverClientId: string;
  autoSelectEnabled: boolean;
  filterByAuthorizedAccounts?: boolean;
};

export type GoogleCredential = {
  type: 'google-signin';
  id: string;
  idToken: string;
  displayName?: string;
  familyName?: string;
  givenName?: string;
  profilePicture?: string;
  phoneNumber?: string;
};

// Apple Sign In types
type AppleSignInParams = {
  nonce: string;
  requestedScopes: string[];
};

export type AppleCredential = {
  type: 'apple-signin';
  id: string;
  idToken: string;
  displayName?: string;
  familyName?: string;
  givenName?: string;
  email?: string;
};

// Combined credential type
export type Credential =
  | PasskeyCredential
  | PasswordCredential
  | GoogleCredential
  | AppleCredential;

// Native module interface
export interface Spec extends TurboModule {
  /**
   * Sign up with passkeys (supported on both Android and iOS)
   * @param requestJson WebAuthn request object
   * @param preferImmediatelyAvailableCredentials Android-specific parameter, ignored on iOS
   */
  signUpWithPasskeys(
    requestJson: Object,
    preferImmediatelyAvailableCredentials: boolean
  ): Promise<Object>;

  /**
   * Sign up with password (Android only - not supported on iOS)
   * iOS will reject with UNSUPPORTED_OPERATION error
   */
  signUpWithPassword(credObject: CredObject): Promise<Object>;

  /**
   * Sign in with various methods
   * - 'passkeys': Supported on both platforms
   * - 'password': Supported on android
   * - 'google-signin': Android only
   * - 'apple-signin': iOS only (not available on Android)
   */
  signIn(
    options: SignInOption[],
    params: {
      passkeys?: Object;
      googleSignIn?: GoogleSignInParams; // Used only on Android
      appleSignIn?: AppleSignInParams; // Used only on iOS
    }
  ): Promise<Credential>;

  /**
   * Sign up with Google (Android-specific implementation)
   */
  signUpWithGoogle(params: GoogleSignInParams): Promise<GoogleCredential>;

  /**
   * Sign up with Apple (iOS-specific implementation)
   * Will reject with UNSUPPORTED_OPERATION on Android
   */
  signUpWithApple(params: AppleSignInParams): Promise<AppleCredential>;

  /**
   * Sign out (behavior varies by platform)
   * On iOS, this is a no-op as AuthenticationServices doesn't provide a sign-out method
   */
  signOut(): Promise<null>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('CredentialsManager');



================================================
FILE: src/__tests__/index.test.ts
================================================
// Mock the native module to isolate JavaScript logic testing
jest.mock('../NativeCredentialsManager', () => ({
  __esModule: true,
  default: {
    signUpWithPasskeys: jest.fn(() =>
      Promise.resolve({ type: 'passkey', authenticationResponseJson: '{}' })
    ),
    signUpWithPassword: jest.fn(() =>
      Promise.resolve({ type: 'password', username: 'test', password: 'test' })
    ),
    signIn: jest.fn((_options, _params) =>
      Promise.resolve({
        type: 'passkey',
        authenticationResponseJson: '{}',
      })
    ),
    signUpWithGoogle: jest.fn(() =>
      Promise.resolve({
        type: 'google-signin',
        id: 'test-id',
        idToken: 'test-token',
      })
    ),
    signUpWithApple: jest.fn(() =>
      Promise.resolve({
        type: 'apple-signin',
        id: 'test-id',
        idToken: 'test-token',
      })
    ),
    signOut: jest.fn(() => Promise.resolve(null)),
    addListener: jest.fn(),
    removeListeners: jest.fn(),
  },
}));

import {
  signUpWithPasskeys,
  signUpWithPassword,
  signUpWithGoogle,
  signUpWithApple,
  signIn,
  signOut,
} from '../index';
import CredentialsManager from '../NativeCredentialsManager';

// Get the mocked module for assertions
const mockNativeModule = CredentialsManager as jest.Mocked<
  typeof CredentialsManager
>;

describe('react-native-credentials-manager', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('signUpWithPasskeys', () => {
    it('should call native module with correct parameters', async () => {
      const requestJson = { challenge: 'test-challenge' };
      await signUpWithPasskeys(requestJson, true);

      expect(mockNativeModule.signUpWithPasskeys).toHaveBeenCalledWith(
        requestJson,
        true
      );
      expect(mockNativeModule.signUpWithPasskeys).toHaveBeenCalledTimes(1);
    });

    it('should use default value for preferImmediatelyAvailableCredentials', async () => {
      const requestJson = { challenge: 'test-challenge' };
      await signUpWithPasskeys(requestJson);

      expect(mockNativeModule.signUpWithPasskeys).toHaveBeenCalledWith(
        requestJson,
        false
      );
    });
  });

  describe('signUpWithPassword', () => {
    it('should reject on iOS with appropriate error', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'ios';

      await expect(
        signUpWithPassword({ username: 'test', password: 'pass' })
      ).rejects.toThrow(
        'Manual password storage is not supported on iOS. Use AutoFill passwords through signIn method instead.'
      );

      expect(mockNativeModule.signUpWithPassword).not.toHaveBeenCalled();
      require('react-native').Platform.OS = originalPlatform;
    });

    it('should call native module on Android', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'android';

      await signUpWithPassword({ username: 'testuser', password: 'testpass' });

      expect(mockNativeModule.signUpWithPassword).toHaveBeenCalledWith({
        password: 'testpass',
        username: 'testuser',
      });
      expect(mockNativeModule.signUpWithPassword).toHaveBeenCalledTimes(1);

      require('react-native').Platform.OS = originalPlatform;
    });
  });

  describe('signUpWithGoogle', () => {
    it('should reject on iOS with appropriate error', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'ios';

      await expect(
        signUpWithGoogle({ serverClientId: 'test-client-id' })
      ).rejects.toThrow(
        'Google Sign In is only available on Android. Use signUpWithApple on iOS.'
      );

      expect(mockNativeModule.signUpWithGoogle).not.toHaveBeenCalled();
      require('react-native').Platform.OS = originalPlatform;
    });

    it('should apply default values correctly on Android', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'android';

      await signUpWithGoogle({ serverClientId: 'test-client-id' });

      expect(mockNativeModule.signUpWithGoogle).toHaveBeenCalledWith({
        serverClientId: 'test-client-id',
        nonce: '',
        autoSelectEnabled: true,
        filterByAuthorizedAccounts: false,
      });

      require('react-native').Platform.OS = originalPlatform;
    });

    it('should use provided values when specified', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'android';

      await signUpWithGoogle({
        serverClientId: 'test-client-id',
        nonce: 'custom-nonce',
        autoSelectEnabled: false,
        filterByAuthorizedAccounts: true,
      });

      expect(mockNativeModule.signUpWithGoogle).toHaveBeenCalledWith({
        serverClientId: 'test-client-id',
        nonce: 'custom-nonce',
        autoSelectEnabled: false,
        filterByAuthorizedAccounts: true,
      });

      require('react-native').Platform.OS = originalPlatform;
    });
  });

  describe('signUpWithApple', () => {
    it('should reject on non-iOS platforms with appropriate error', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'android';

      await expect(signUpWithApple()).rejects.toThrow(
        'Apple Sign In is only available on iOS. Use signUpWithGoogle on Android.'
      );

      expect(mockNativeModule.signUpWithApple).not.toHaveBeenCalled();
      require('react-native').Platform.OS = originalPlatform;
    });

    it('should apply default values correctly on iOS', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'ios';

      await signUpWithApple();

      expect(mockNativeModule.signUpWithApple).toHaveBeenCalledWith({
        nonce: '',
        requestedScopes: ['fullName', 'email'],
      });

      require('react-native').Platform.OS = originalPlatform;
    });

    it('should use provided values when specified', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'ios';

      await signUpWithApple({
        nonce: 'custom-nonce',
        requestedScopes: ['email'],
      });

      expect(mockNativeModule.signUpWithApple).toHaveBeenCalledWith({
        nonce: 'custom-nonce',
        requestedScopes: ['email'],
      });

      require('react-native').Platform.OS = originalPlatform;
    });
  });

  describe('signIn', () => {
    it('should apply default values for Google Sign In params', async () => {
      await signIn(['google-signin'], {
        googleSignIn: { serverClientId: 'test-id' },
      });

      expect(mockNativeModule.signIn).toHaveBeenCalledWith(['google-signin'], {
        passkeys: undefined,
        googleSignIn: {
          serverClientId: 'test-id',
          nonce: '',
          autoSelectEnabled: true,
          filterByAuthorizedAccounts: true,
        },
      });
    });

    it('should apply default values for Apple Sign In params on iOS', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'ios';

      await signIn(['apple-signin'], { appleSignIn: {} });

      expect(mockNativeModule.signIn).toHaveBeenCalledWith(['apple-signin'], {
        passkeys: undefined,
        appleSignIn: {
          nonce: '',
          requestedScopes: ['fullName', 'email'],
        },
      });

      require('react-native').Platform.OS = originalPlatform;
    });

    it('should not add Apple params on non-iOS platforms', async () => {
      const originalPlatform = require('react-native').Platform.OS;
      require('react-native').Platform.OS = 'android';

      await signIn(['apple-signin'], { appleSignIn: {} });

      expect(mockNativeModule.signIn).toHaveBeenCalledWith(['apple-signin'], {
        passkeys: undefined,
      });

      require('react-native').Platform.OS = originalPlatform;
    });

    it('should pass through passkey params', async () => {
      const passkeyParams = { challenge: 'test-challenge' };
      await signIn(['passkeys'], { passkeys: passkeyParams });

      expect(mockNativeModule.signIn).toHaveBeenCalledWith(['passkeys'], {
        passkeys: passkeyParams,
      });
    });

    it('should handle multiple sign-in options', async () => {
      await signIn(['passkeys', 'password', 'google-signin'], {
        passkeys: { challenge: 'test' },
        googleSignIn: { serverClientId: 'test-id' },
      });

      expect(mockNativeModule.signIn).toHaveBeenCalledWith(
        ['passkeys', 'password', 'google-signin'],
        {
          passkeys: { challenge: 'test' },
          googleSignIn: {
            serverClientId: 'test-id',
            nonce: '',
            autoSelectEnabled: true,
            filterByAuthorizedAccounts: true,
          },
        }
      );
    });
  });

  describe('signOut', () => {
    it('should call native signOut method', async () => {
      await signOut();

      expect(mockNativeModule.signOut).toHaveBeenCalledTimes(1);
    });
  });
});



================================================
FILE: src/__tests__/index.test.tsx
================================================
it.todo('write a test');



================================================
FILE: .github/actions/setup/action.yml
================================================
name: Setup
description: Setup Node.js and install dependencies

runs:
  using: composite
  steps:
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version-file: .nvmrc

    - name: Restore dependencies
      id: yarn-cache
      uses: actions/cache/restore@v4
      with:
        path: |
          **/node_modules
          .yarn/install-state.gz
        key: ${{ runner.os }}-yarn-${{ hashFiles('yarn.lock') }}-${{ hashFiles('**/package.json', '!node_modules/**') }}
        restore-keys: |
          ${{ runner.os }}-yarn-${{ hashFiles('yarn.lock') }}
          ${{ runner.os }}-yarn-

    - name: Install dependencies
      if: steps.yarn-cache.outputs.cache-hit != 'true'
      run: yarn install --immutable
      shell: bash

    - name: Cache dependencies
      if: steps.yarn-cache.outputs.cache-hit != 'true'
      uses: actions/cache/save@v4
      with:
        path: |
          **/node_modules
          .yarn/install-state.gz
        key: ${{ steps.yarn-cache.outputs.cache-primary-key }}



================================================
FILE: .github/ISSUE_TEMPLATE/bug_report.md
================================================
---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

## Describe the bug

A clear and concise description of what the bug is.

## Environment

- **React Native version**: <!-- e.g. 0.71.0 -->
- **Library version**: <!-- e.g. 1.0.0 -->
- **Platform**: <!-- iOS, Android, or both -->
- **Device information**:
  - iOS: <!-- e.g. iPhone 14 Pro, iOS 16.2 (physical) OR iPhone 13 Simulator, iOS 15.5 -->
  - Android: <!-- e.g. Pixel 6, Android 12 (physical) OR Pixel 4 Emulator, Android 11 -->

## Steps to Reproduce

1.
2.
3.

## Expected behavior

A clear and concise description of what you expected to happen.

## Actual behavior

A clear and concise description of what actually happened.

## Screenshots

If applicable, add screenshots to help explain your problem.

## Code snippet

```javascript
// Add a minimal code example that demonstrates the issue
```

## Additional context

- Have you tried on both physical device and simulator/emulator?
- Have you tested on the latest library version?
- Any other relevant information about your setup



================================================
FILE: .github/ISSUE_TEMPLATE/config.yml
================================================
blank_issues_enabled: false
contact_links:
  - name: Question or Discussion
    url: https://github.com/username/react-native-credentials-manager/discussions
    about: Please ask and answer questions here.
  - name: Documentation
    url: https://docs.benjamineruvieru.com/docs/category/react-native-credentials-manager
    about: Make sure you've read the documentation before filing an issue.



================================================
FILE: .github/ISSUE_TEMPLATE/feature_request.md
================================================
---
name: Feature request
about: Suggest an idea for this project
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

## Is your feature request related to a problem? Please describe.

A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

## Describe the solution you'd like

A clear and concise description of what you want to happen.

## Describe alternatives you've considered

A clear and concise description of any alternative solutions or features you've considered.

## Environment (if relevant)

- **React Native version**: <!-- e.g. 0.71.0 -->
- **Platform**: <!-- iOS, Android, or both -->

## Additional context

Add any other context or screenshots about the feature request here.



================================================
FILE: .github/workflows/ci.yml
================================================
name: CI
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  merge_group:
    types:
      - checks_requested

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup
        uses: ./.github/actions/setup

      - name: Lint files
        run: yarn lint

      - name: Typecheck files
        run: yarn typecheck

  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup
        uses: ./.github/actions/setup

      - name: Run unit tests
        run: yarn test --maxWorkers=2 --coverage

  build-library:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup
        uses: ./.github/actions/setup

      - name: Build package
        run: yarn prepare

  build-android:
    runs-on: ubuntu-latest
    env:
      TURBO_CACHE_DIR: .turbo/android
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup
        uses: ./.github/actions/setup

      - name: Cache turborepo for Android
        uses: actions/cache@v4
        with:
          path: ${{ env.TURBO_CACHE_DIR }}
          key: ${{ runner.os }}-turborepo-android-${{ hashFiles('yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-turborepo-android-

      - name: Check turborepo cache for Android
        run: |
          TURBO_CACHE_STATUS=$(node -p "($(yarn turbo run build:android --cache-dir="${{ env.TURBO_CACHE_DIR }}" --dry=json)).tasks.find(t => t.task === 'build:android').cache.status")

          if [[ $TURBO_CACHE_STATUS == "HIT" ]]; then
            echo "turbo_cache_hit=1" >> $GITHUB_ENV
          fi

      - name: Install JDK
        if: env.turbo_cache_hit != 1
        uses: actions/setup-java@v4
        with:
          distribution: 'zulu'
          java-version: '17'

      - name: Finalize Android SDK
        if: env.turbo_cache_hit != 1
        run: |
          /bin/bash -c "yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses > /dev/null"

      - name: Cache Gradle
        if: env.turbo_cache_hit != 1
        uses: actions/cache@v4
        with:
          path: |
            ~/.gradle/wrapper
            ~/.gradle/caches
          key: ${{ runner.os }}-gradle-${{ hashFiles('example/android/gradle/wrapper/gradle-wrapper.properties') }}
          restore-keys: |
            ${{ runner.os }}-gradle-

      - name: Build example for Android
        env:
          JAVA_OPTS: '-XX:MaxHeapSize=6g'
        run: |
          yarn turbo run build:android --cache-dir="${{ env.TURBO_CACHE_DIR }}"

  build-ios:
    runs-on: macos-14
    env:
      TURBO_CACHE_DIR: .turbo/ios
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup
        uses: ./.github/actions/setup

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
          working-directory: example

      - name: Select Xcode version
        run: sudo xcode-select -s /Applications/Xcode_15.4.app

      - name: Show build environment
        run: |
          xcodebuild -version
          xcode-select -p
          clang --version

      - name: Cache turborepo for iOS
        uses: actions/cache@v4
        with:
          path: ${{ env.TURBO_CACHE_DIR }}
          key: ${{ runner.os }}-turborepo-ios-${{ hashFiles('yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-turborepo-ios-

      - name: Check turborepo cache for iOS
        run: |
          TURBO_CACHE_STATUS=$(node -p "($(yarn turbo run build:ios --cache-dir="${{ env.TURBO_CACHE_DIR }}" --dry=json)).tasks.find(t => t.task === 'build:ios').cache.status")

          if [[ $TURBO_CACHE_STATUS == "HIT" ]]; then
            echo "turbo_cache_hit=1" >> $GITHUB_ENV
          fi

      - name: Restore cocoapods
        if: env.turbo_cache_hit != 1
        id: cocoapods-cache
        uses: actions/cache/restore@v4
        with:
          path: |
            **/ios/Pods
          key: ${{ runner.os }}-cocoapods-${{ hashFiles('example/ios/Podfile.lock', 'example/ios/Podfile') }}
          restore-keys: |
            ${{ runner.os }}-cocoapods-

      - name: Install cocoapods
        if: env.turbo_cache_hit != 1 && steps.cocoapods-cache.outputs.cache-hit != 'true'
        run: |
          cd example/ios
          pod install
        env:
          NO_FLIPPER: 1

      - name: Cache cocoapods
        if: env.turbo_cache_hit != 1 && steps.cocoapods-cache.outputs.cache-hit != 'true'
        uses: actions/cache/save@v4
        with:
          path: |
            **/ios/Pods
          key: ${{ steps.cocoapods-cache.outputs.cache-key }}

      - name: Clean iOS build folder
        if: env.turbo_cache_hit != 1
        run: |
          rm -rf example/ios/build

      - name: Build example for iOS
        run: |
          yarn turbo run build:ios --cache-dir="${{ env.TURBO_CACHE_DIR }}"


