# TIME OF GARAM

사진작가 GARAM의 독립형 포트폴리오 웹사이트입니다.

별도의 웹사이트 제작 서비스에 종속되지 않는 정적 웹사이트이며, HTML·CSS·JavaScript와 이미지 파일만으로 구성되어 있습니다. GitHub Pages, Cloudflare Pages, Netlify 등 일반적인 정적 호스팅에 올릴 수 있습니다.

## 2026-11-15 업데이트 내용

- **이력 추가**: IPA 2026 Official Selection, WSPA 2026 Honorable Mention. 이력을 AWARDS / EXHIBITIONS로 나누어 정리했고, 첫 화면 왼쪽에도 작게 표시합니다.
- **작가노트 섹션 추가**: Long Exposure 작업의 핵심 「What Moves, What Remains?」를 국문·영문으로 실었습니다. 메뉴의 `STATEMENT`로 바로 이동합니다.
- **작품 10점 → 32점**: 새로 추가한 사진을 포함해 밤의 빛·장소 작업에서 거리의 인물 작업으로 이어지도록 순서를 정리했습니다. 같은 장면의 벚꽃 사진 두 장(`time-08.jpg`, `_DSF0967-2.jpg`)은 나중에 보정한 `time-08.jpg` 한 장만 실었습니다.
- **사진 용량 정리**: 기존 `time-07.jpg` 한 장이 21.8MB였습니다. 모든 사진을 웹용 두 가지 크기로 다시 내보내 화면 크기에 맞는 파일만 불러오도록 했습니다. 색 프로파일(Display P3)은 그대로 유지했습니다.
- **개인정보 보호**: 사진 파일의 촬영 정보(EXIF: 위치·카메라 정보 등)를 지우고, 저작권 정보(`GARAM`, `© 2026 GARAM`)를 넣었습니다.
- **모바일 메뉴 수정**: 메뉴를 열면 배경이 비쳐 글자가 겹쳐 보이던 문제를 고쳤습니다.
- **사진 확대 보기 개선**: 모바일에서 좌우로 밀어 넘기기, 다음·이전 사진 미리 불러오기, 확대 중 뒤 화면 스크롤 잠금.
- **공유 미리보기·검색 정보**: 카카오톡·SNS에 링크를 붙였을 때 보이는 대표 이미지(`assets/og-image.jpg`)와 설명, 검색엔진용 작가 정보를 추가했습니다.

## 폴더 구성

```text
TIME-OF-GARAM-GITHUB/
├── index.html            웹사이트 본문 (작가노트·작품·이력)
├── style.css             디자인과 반응형 레이아웃
├── script.js             메뉴와 사진 확대 기능
├── favicon.svg           브라우저 아이콘
├── README.md             이 안내서
└── assets/
    ├── og-image.jpg      링크 공유 미리보기 이미지 (1200×630)
    └── works/
        ├── large/        큰 사진 32장 (긴 변 2400px, 확대 보기용)
        └── medium/       중간 사진 32장 (긴 변 1440px, 목록용)
```

`index.html`은 반드시 저장소의 가장 바깥쪽에 있어야 합니다. ZIP 파일 자체를 GitHub에 올리지 말고, ZIP을 푼 뒤 안에 있는 파일과 `assets` 폴더를 모두 업로드하세요.

## 이미 운영 중인 GitHub 저장소를 업데이트하기

이전 버전의 `assets/time-01.jpg` ~ `time-10.jpg`는 더 이상 쓰지 않습니다. 그대로 두면 저장소 용량만 차지하므로(특히 21.8MB짜리 파일) 먼저 지우는 것을 권장합니다.

1. GitHub 저장소에서 `assets` 폴더를 엽니다.
2. 오른쪽 위 `…` 메뉴 → `Delete directory`를 선택하고 `Commit changes`를 누릅니다.
3. 저장소 첫 화면에서 `Add file` → `Upload files`를 선택합니다.
4. ZIP을 푼 폴더 안의 `index.html`, `style.css`, `script.js`, `favicon.svg`, `README.md`와 `assets` 폴더를 한꺼번에 끌어다 놓습니다. 같은 이름의 파일은 새 파일로 바뀝니다.
5. `Commit changes`를 누르면 1~2분 뒤 웹사이트에 반영됩니다. 바로 바뀌지 않으면 브라우저에서 새로고침(Shift+새로고침)을 해 보세요.

## GitHub Pages로 처음 공개하기

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

## 작품 추가·교체

### 1. 사진 내보내기 (Lightroom 등)

같은 사진을 **같은 파일 이름**으로 두 번 내보냅니다. 파일 이름은 영문 소문자·숫자·하이픈(-)만 쓰세요. 밑줄(_)로 시작하는 이름은 GitHub Pages에서 보이지 않을 수 있습니다.

| 폴더 | 크기 | 품질 |
|---|---|---|
| `assets/works/large/` | 긴 변 2400px | JPG 품질 80 |
| `assets/works/medium/` | 긴 변 1440px | JPG 품질 80 |

원본(수십 MB)을 그대로 올리면 페이지가 매우 느려집니다. 한 장에 1MB 안팎이면 적당합니다. 내보낼 때 위치 정보(GPS)는 빼는 것을 권장합니다.

### 2. index.html에 작품 넣기

`index.html`에서 `<div class="gallery">` 안의 `<figure class="work …">…</figure>` 묶음 하나가 작품 하나입니다. 기존 묶음 하나를 복사해 원하는 위치에 붙여 넣고 세 군데를 바꿉니다.

- `medium/파일이름.jpg`, `large/파일이름.jpg` (총 3곳)
- `width`, `height` — medium 파일의 가로·세로 픽셀 (세로 사진 1080×1440, 가로 사진 1440×1080)
- `alt` — 사진을 글로 짧게 설명 (시각장애인용 화면 낭독, 검색에 쓰입니다)

작품 번호(02, 03 …)와 확대 보기 순서는 자동으로 매겨지므로 따로 고칠 필요가 없습니다. 순서를 바꾸려면 묶음의 위치만 옮기면 됩니다.

배치는 `figure`의 class로 정합니다.

| class | 배치 |
|---|---|
| `work l` + `work r` | 세로 사진 두 장을 왼쪽·오른쪽에 나란히 |
| `drop` 추가 | 그 사진을 아래로 엇갈리게 내림 (예: `work r drop`) |
| `work c` | 세로 사진 한 장을 가운데에 크게 |
| `work wide landscape` | 가로 사진을 넓게 |
| `work wide-r landscape` | 가로 사진을 오른쪽으로 치우쳐 |

가로 사진에는 꼭 `landscape`를 함께 붙여 주세요.

### 3. 대표 사진(첫 화면) 바꾸기

`index.html` 위쪽의 `hero-image` 안 `time-01.jpg`(3곳)와 `<head>`의 `preload` 줄에 있는 `time-01.jpg`(3곳)를 새 파일 이름으로 바꿉니다.

## 이력·작가노트 수정

- **이력**: `index.html`에서 `<div class="cv">`를 찾아 `<li>…</li>` 한 줄을 복사해 연도·이름·내용을 바꿉니다. 새 분류(예: PUBLICATIONS)는 `<div class="cv-group">` 묶음을 통째로 복사합니다.
- **첫 화면 수상 표기**: `class="hero-awards"` 줄.
- **검색·공유용 설명**: `<head>`의 `description`, `og:description`, 그리고 `"award"` 목록.
- **작가노트**: `id="statement"` 섹션. 국문은 `statement-ko`, 영문은 `statement-en` 안의 `<p>` 한 개가 한 문단입니다.

## 링크 공유 미리보기 완성하기

웹사이트 주소가 정해지면 `index.html`의 다음 줄을 전체 주소로 바꿔 주세요. 일부 SNS는 전체 주소여야 미리보기 이미지를 보여 줍니다.

```html
<meta property="og:image" content="assets/og-image.jpg">
<!-- 예시 → -->
<meta property="og:image" content="https://깃허브아이디.github.io/time-of-garam/assets/og-image.jpg">
```

## 사진 파일 대응표

웹사이트의 번호와 원본 파일의 대응입니다. (`fluid-` 파일은 이전 홈페이지에만 있던 사진으로, 원본 대신 이전 웹용 파일을 사용했습니다.)

| 번호 | 웹사이트 파일 | 원본 |
|---|---|---|
| 01 | `time-01.jpg` | 업데이트 폴더 `time-01.jpg` (대표 사진) |
| 02 | `time-02.jpg` | 업데이트 폴더 `time-02.jpg` |
| 03 | `time-03.jpg` | 업데이트 폴더 `time-03.jpg` |
| 04 | `time-10.jpg` | 업데이트 폴더 `time-10.jpg` |
| 05 | `dsf6345.jpg` | 업데이트 폴더 `_DSF6345-2.jpg` |
| 06 | `time-09.jpg` | 업데이트 폴더 `time-09.jpg` |
| 07 | `dsf6952.jpg` | 업데이트 폴더 `_DSF6952.jpg` |
| 08 | `time-05.jpg` | 업데이트 폴더 `time-05.jpg` |
| 09 | `time-07.jpg` | 업데이트 폴더 `time-07.jpg` |
| 10 | `fluid-09.jpg` | 이전 홈페이지 `assets/time-09.jpg` |
| 11 | `fluid-10.jpg` | 이전 홈페이지 `assets/time-10.jpg` |
| 12 | `dsf6822.jpg` | 업데이트 폴더 `_DSF6822-2.jpg` |
| 13 | `dsf6846.jpg` | 업데이트 폴더 `_DSF6846.jpg` |
| 14 | `dsf6431.jpg` | 업데이트 폴더 `_DSF6431.jpg` |
| 15 | `time-06.jpg` | 업데이트 폴더 `time-06.jpg` |
| 16 | `dsf1299.jpg` | 업데이트 폴더 `_DSF1299.jpg` |
| 17 | `time-04.jpg` | 업데이트 폴더 `time-04.jpg` |
| 18 | `dsf8240.jpg` | 업데이트 폴더 `_DSF8240-4.jpg` |
| 19 | `dsf8022.jpg` | 업데이트 폴더 `_DSF8022.jpg` |
| 20 | `dsf7409.jpg` | 업데이트 폴더 `_DSF7409-2.jpg` |
| 21 | `dsf7420.jpg` | 업데이트 폴더 `_DSF7420-4.jpg` |
| 22 | `dsf8892.jpg` | 업데이트 폴더 `_DSF8892-2.jpg` |
| 23 | `dsf8857.jpg` | 업데이트 폴더 `_DSF8857.jpg` |
| 24 | `dsf8941.jpg` | 업데이트 폴더 `_DSF8941.jpg` |
| 25 | `dsf8578.jpg` | 업데이트 폴더 `_DSF8578-2.jpg` |
| 26 | `dsf8581.jpg` | 업데이트 폴더 `_DSF8581-2.jpg` |
| 27 | `fluid-05.jpg` | 이전 홈페이지 `assets/time-05.jpg` |
| 28 | `dsf8688.jpg` | 업데이트 폴더 `_DSF8688-2.jpg` |
| 29 | `dsf8689.jpg` | 업데이트 폴더 `_DSF8689-2.jpg` |
| 30 | `dsf8743.jpg` | 업데이트 폴더 `_DSF8743-2.jpg` |
| 31 | `dsf8732.jpg` | 업데이트 폴더 `_DSF8732-3.jpg` |
| 32 | `time-08.jpg` | 업데이트 폴더 `time-08.jpg` |

## 더 독립적으로 운영하는 권장 방식

소스 파일을 비공개로 두고 싶다면 GitHub 저장소를 `Private`로 만든 뒤 Cloudflare Pages와 연결하는 방법이 좋습니다. GitHub에 새 버전을 올릴 때마다 웹사이트가 자동으로 갱신되며, 나중에 구매한 개인 도메인도 연결할 수 있습니다.

단, 저장소를 비공개로 하더라도 웹사이트 방문자에게 표시되는 사진은 브라우저로 전송되므로 완전한 다운로드 방지는 불가능합니다. 공개용 이미지는 적절한 해상도로 내보내고 워터마크 또는 저작권 고지를 사용하는 편이 안전합니다. (현재 웹용 사진은 긴 변 2400px 이하이며, 파일 안에 저작권 정보가 들어 있습니다.)

## 내 컴퓨터에서 미리 보기

`index.html`을 더블클릭하면 기본 화면을 확인할 수 있습니다. 브라우저 보안 설정에 따라 일부 기능이 다르게 보이면 VS Code의 Live Server 같은 로컬 서버로 열어 확인하세요.

## 백업

이 ZIP과 원본 사진은 GitHub 외에도 개인 컴퓨터나 외장 저장장치에 별도로 보관하세요. 도메인, GitHub 계정, 호스팅 계정의 소유자는 반드시 GARAM 본인이어야 합니다.
