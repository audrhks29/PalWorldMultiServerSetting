# [React] 20240216 PalWorld Multi Server Setting

## 사이트 주소
[바로가기](https://www.palworldserversetter.com/)

## 1. 사용기술

<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=black"> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black">

## 2. 배포
1. [Netlify](https://app.netlify.com/)를 통한 배포
2. 배포 후 [가비아](https://www.gabia.com/)를 통한 도메인 구입
3. [가비아](https://www.gabia.com/)에서 [Netlify](https://app.netlify.com/)와 맞는 네임서버 설정
4. 최종 배포

## 3. SEO최적화
1. Root Directory Upload File
     1. robots.txt
    ```
      User-agent: *
      Allow:/
    ```
      모든 크롤러 지정 및 모든 경로 크롤링 허용

    2. sitemap.xml - 웹페이지 크롤링 및 색인

## 4. Google AdSense
1. 광고설정을 위해 index.html head태그에 코드 추가
   ```js 
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183167432172719"
    crossorigin="anonymous"></script>
   ```
2. 자동 광고 설정 - 현재 승인 대기중...