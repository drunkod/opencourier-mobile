.PHONY: test
GIT_COMMIT := $(shell git rev-parse --short HEAD)
GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
REPO_URL := $(shell git config --get remote.origin.url)
# Extract owner and repo name
repo_path := $(shell echo $(REPO_URL) | sed -E 's|https?://github.com/([^/]+)/([^/]+).*|\1/\2|' | sed 's/\.git$$//')
# Build GitHub API URL for latest release
LATEST_RELEASE_API := https://api.github.com/repos/$(repo_path)/releases/latest
# These would be passed via GitHub Actions ENV or defined manually for local testing
PROJECT_NAME ?= $(shell node -p "require('./package.json').name")
BUILD_NAME ?= $(shell node -p "require('./package.json').version")
BUILD_NUMBER ?= $(shell git rev-list --count HEAD)
BUILD_ID := $(BUILD_NAME)+$(BUILD_NUMBER)
##
# $(PROJECT_NAME)
#
# @file
# @version 0.1
install: ## install dependencies
	yarn install
# end

test: install ## run tests
	yarn test

apk: install ## build apk
	cd android && ./gradlew assembleDebug

apk-release: install ## build apk for release
	@echo "Building APK with:"
	@echo "  GIT_COMMIT:          $(GIT_COMMIT)"
	@echo "  GIT_BRANCH:          $(GIT_BRANCH)"
	@echo "  BUILD_NAME:          $(BUILD_NAME)"
	@echo "  BUILD_NUMBER:        $(BUILD_NUMBER)"
	@echo "  BUILD_ID:            $(BUILD_ID)"
	@echo "  REPO_URL:            $(REPO_URL)"
	@echo "  LATEST_RELEASE_API:  $(LATEST_RELEASE_API)"
	cd android && ./gradlew assembleRelease

clean: ## clean android build
	cd android && ./gradlew clean

ios-release: install ## build ipa for release
	@echo "Building IPA with:"
	@echo "  GIT_COMMIT:          $(GIT_COMMIT)"
	@echo "  GIT_BRANCH:          $(GIT_BRANCH)"
	@echo "  BUILD_NAME:          $(BUILD_NAME)"
	@echo "  BUILD_NUMBER:        $(BUILD_NUMBER)"
	@echo "  BUILD_ID:            $(BUILD_ID)"
	@echo "  REPO_URL:            $(REPO_URL)"
	@echo "  LATEST_RELEASE_API:  $(LATEST_RELEASE_API)"
	cd ios && xcodebuild -workspace $(PROJECT_NAME).xcworkspace -scheme $(PROJECT_NAME) -sdk iphoneos -configuration Release archive -archivePath $$PWD/build/$(PROJECT_NAME).xcarchive
	cd ios && xcodebuild -exportArchive -archivePath $$PWD/build/$(PROJECT_NAME).xcarchive -exportPath $$PWD/build/$(PROJECT_NAME) -exportOptionsPlist exportOptions.plist

clean-full: clean ## full clean
	rm -rf node_modules
	rm -rf android/build
	rm -rf ios/build

upgrade:
	yarn upgrade

format:
	yarn lint --fix
