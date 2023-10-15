# jest 테스트

    React, Typescript, Jest 테스트 프로젝트

# 설치 라이브러리

    install : babel-jest, @babel/core, @babel/preset-env, @babel/preset-react
    typescript : @babel/preset-typescript
    특수 : @testing-library/user-event 라이브러리는 13버전은 더이상 지원하지 않기 때문에 최신 user-event를 별도로 설치해야합

# bable.config.json 생성

    {
        "presets": [
            ["@babel/preset-env"],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ]
    }

# SVG 대응 모듈 에러 처리

    `__mocks__` 폴더 fileMock.js 파일 생성
    package.json에 jest moduleNameMapper 설정 추가 : "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/`__mocks__`/fileMock.js"

# CSS 대응 모듈 에러 처리

    `__mocks__` 폴더 styleMock.js 파일 생성
    package.json에 jest moduleNameMapper 설정 추가 : "\\.(css|less|scss|sass)$": "<rootDir>/`__mocks__`/styleMock.js"

# Rendering 대응 에러 처리

    package.json에 "testEnvironment": "jsdom" 설정 추가
