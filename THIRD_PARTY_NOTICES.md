# Third-Party Notices

이 프로젝트의 `LICENSE`(MIT)는 직접 작성한 코드와 문장에 적용됩니다.
`data/` 폴더의 일부 데이터는 아래 외부 자료에서 추출·변환한 것이며, 각 자료의 라이선스를 따릅니다.

## 데이터 파일별 출처

| 파일 | 내용 | 출처 | 라이선스 |
|---|---|---|---|
| `data/stars.js` | 이름 있는 밝은 별 | d3-celestial (Hipparcos 기반) | BSD-3-Clause |
| `data/bg-stars.js` | 배경 별, 별 표기(바이어·플램스티드) | d3-celestial (Hipparcos 기반, 교차 색인) | BSD-3-Clause |
| `data/constellations.js` | 별자리 선, 한국어 이름, 이름 위치 | d3-celestial (IAU 별자리 자료 기반) | BSD-3-Clause |
| `data/milkyway.js` | 은하수 밝기 윤곽 (격자로 변환) | d3-celestial (Milky Way Outline Catalog, Jose R. Vieira) | BSD-3-Clause |
| `data/deep-sky.js` | 메시에 천체 좌표·등급 | d3-celestial (SEDS Messier 자료) | BSD-3-Clause |
| `data/land.js` | 대륙 윤곽 (단순화) | world-atlas (Natural Earth 110m) | ISC / 퍼블릭 도메인 |
| `data/meteor-showers.js` | 유성우 날짜·복사점 | American Meteor Society, International Meteor Organization 유성우 달력 | 사실 정보 (출처 표기) |
| `index.html` 행성 궤도 요소 | 행성 근사 궤도 요소 | NASA JPL "Keplerian Elements for Approximate Positions of the Major Planets" | 미국 정부 자료 |

`data/deep-sky.js`의 한국어 이름·설명 문장과 거리 표기는 직접 작성했습니다.

## 글꼴

| 글꼴 | 사용 위치 | 출처 | 라이선스 |
|---|---|---|---|
| Pretendard | 화면의 모든 글자 (CDN으로 불러옴) | https://github.com/orioncactus/pretendard | SIL Open Font License 1.1 |

Pretendard는 저장소에 포함하지 않고 jsDelivr CDN에서 불러옵니다. SIL OFL 1.1은 글꼴을 자유롭게 사용·배포할 수 있게 허용하며, 글꼴 파일 자체를 판매하는 것만 금지합니다.

## 원본 자료 상세

d3-celestial이 밝힌 원본 출처:
- XHIP: An Extended Hipparcos Compilation (Anderson & Francis 2012), VizieR V/137D
- HD-DM-GC-HR-HIP-Bayer-Flamsteed Cross Index (Kostjuk 2002), VizieR IV/27A
- IAU Constellations, 다국어 별자리 이름은 Wikipedia
- Milky Way Outline Catalog, Jose R. Vieira (skymap.com)
- Messier Objects with Data, H. Frommert / SEDS (messier.seds.org)

Natural Earth: https://www.naturalearthdata.com — 퍼블릭 도메인

---

## d3-celestial — BSD 3-Clause License

https://github.com/ofrohn/d3-celestial

```
Copyright (c) 2015, Olaf Frohn
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## world-atlas — ISC License

https://github.com/topojson/world-atlas

```
Copyright 2013-2019 Michael Bostock

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
```
