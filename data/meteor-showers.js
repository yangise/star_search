// 주요 유성우 10개
// start/peak/end: [월, 일] (극대일은 해마다 하루 정도 달라질 수 있음. peak는 극대 밤이 끝나는 새벽 날짜)
// ra/dec: 복사점 위치(도), zhr: 이상적인 조건에서 시간당 유성 수, speed: 유성 속도(km/s)
// 출처: American Meteor Society 2026-2027 유성우 달력, IMO 2026 유성우 달력
const METEOR_SHOWERS = [
  { id: 'QUA', ko: '사분의자리 유성우', start: [12, 28], peak: [1, 4],   end: [1, 12],  ra: 230.0, dec: 49,   zhr: 120, speed: 40, parent: '소행성 2003 EH1' },
  { id: 'LYR', ko: '거문고자리 유성우', start: [4, 14],  peak: [4, 23],  end: [4, 30],  ra: 271.0, dec: 34,   zhr: 18,  speed: 49, parent: '대처 혜성 (C/1861 G1)' },
  { id: 'ETA', ko: '물병자리 에타 유성우', start: [4, 19], peak: [5, 6], end: [5, 28],  ra: 338.0, dec: -1,   zhr: 50,  speed: 65, parent: '핼리 혜성' },
  { id: 'SDA', ko: '남쪽 물병자리 델타 유성우', start: [7, 12], peak: [7, 30], end: [8, 23], ra: 340.0, dec: -16, zhr: 25, speed: 41, parent: '96P/마크홀츠 혜성' },
  { id: 'PER', ko: '페르세우스자리 유성우', start: [7, 17], peak: [8, 13], end: [8, 24], ra: 48.0, dec: 58,   zhr: 100, speed: 59, parent: '스위프트-터틀 혜성' },
  { id: 'DRA', ko: '용자리 유성우', start: [10, 6],  peak: [10, 9],  end: [10, 10], ra: 262.0, dec: 54,   zhr: 10,  speed: 20, parent: '자코비니-지너 혜성' },
  { id: 'ORI', ko: '오리온자리 유성우', start: [10, 2], peak: [10, 22], end: [11, 7], ra: 95.0,  dec: 15.8, zhr: 20,  speed: 66, parent: '핼리 혜성' },
  { id: 'LEO', ko: '사자자리 유성우', start: [11, 6], peak: [11, 17], end: [11, 30], ra: 152.0, dec: 21.8, zhr: 15,  speed: 70, parent: '템펠-터틀 혜성' },
  { id: 'GEM', ko: '쌍둥이자리 유성우', start: [12, 4], peak: [12, 14], end: [12, 17], ra: 112.0, dec: 33,  zhr: 150, speed: 35, parent: '소행성 3200 파에톤' },
  { id: 'URS', ko: '작은곰자리 유성우', start: [12, 17], peak: [12, 22], end: [12, 26], ra: 217.0, dec: 76, zhr: 10,  speed: 33, parent: '터틀 혜성' },
];
