# TIME OF GARAM

사진작가 GARAM의 독립형 포트폴리오 웹사이트입니다.

별도의 웹사이트 제작 서비스에 종속되지 않는 정적 웹사이트이며, HTML·CSS·JavaScript와 이미지 파일만으로 구성되어 있습니다. GitHub Pages, Cloudflare Pages, Netlify 등 일반적인 정적 호스팅에 올릴 수 있습니다.

## 폴더 구성

```text
TIME-OF-GARAM-GITHUB/
├── index.html       웹사이트 본문
├── style.css        디자인과 반응형 레이아웃
├── script.js        메뉴와 사진 확대 기능
├── favicon.svg      브라우저 아이콘
├── README.md        이 안내서
└── assets/          작품 사진 10장
```

`index.html`은 반드시 저장소의 가장 바깥쪽에 있어야 합니다. ZIP 파일 자체를 GitHub에 올리지 말고, ZIP을 푼 뒤 안에 있는 파일과 `assets` 폴더를 모두 업로드하세요.

## GitHub Pages로 무료 공개하기

1. GitHub에 로그인하고 오른쪽 위 `+` → `New repository`를 선택합니다.
2. Repository name에 `time-of-garam`을 입력합니다.
3. 무료 계정에서 GitHub Pages를 쓰기 쉽도록 `Public`을 선택하고 저장소를 만듭니다.
4. 새 저장소 화면에서 `Add file` → `Upload files`를 선택합니다.
5. 이 ZIP을 푼 뒤 나오는 파일 전체와 `assets` 폴더를 업로드합니다. ZIP 파일 자체는 올리지 않습니다.
6. 아래쪽 `Commit changes`를 누릅니다.
7. 저장소의 `Settings` → 왼쪽 `Pages`로 이동합니다.
8. `Build and deployment`의 Source를 `Deploy from a branch`로 선택합니다.
9. Branch는 `main`, 폴더는 `/ (root)`를 고르고 `Save`를 누릅니다.
10. 잠시 후 `https://깃허브아이디.github.io/time-of-garam/` 주소로 접속합니다.

## 더 독립적으로 운영하는 권장 방식

소스 파일을 비공개로 두고 싶다면 GitHub 저장소를 `Private`로 만든 뒤 Cloudflare Pages와 연결하는 방법이 좋습니다. GitHub에 새 버전을 올릴 때마다 웹사이트가 자동으로 갱신되며, 나중에 구매한 개인 도메인도 연결할 수 있습니다.

단, 저장소를 비공개로 하더라도 웹사이트 방문자에게 표시되는 사진은 브라우저로 전송되므로 완전한 다운로드 방지는 불가능합니다. 공개용 이미지는 적절한 해상도로 내보내고 워터마크 또는 저작권 고지를 사용하는 편이 안전합니다.

## 내 컴퓨터에서 미리 보기

`index.html`을 더블클릭하면 기본 화면을 확인할 수 있습니다. 브라우저 보안 설정에 따라 일부 기능이 다르게 보이면 VS Code의 Live Server 같은 로컬 서버로 열어 확인하세요.

## 작품 교체 방법

`assets` 폴더의 이미지를 교체하고 파일명을 `time-01.jpg`부터 `time-10.jpg`까지 동일하게 유지하면 됩니다. 이미지 수나 순서를 바꾸려면 `index.html`도 함께 수정해야 합니다.

## 백업

이 ZIP과 원본 사진은 GitHub 외에도 개인 컴퓨터나 외장 저장장치에 별도로 보관하세요. 도메인, GitHub 계정, 호스팅 계정의 소유자는 반드시 GARAM 본인이어야 합니다.
