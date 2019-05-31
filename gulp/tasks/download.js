let lstImages = [
"https://2.bp.blogspot.com/5c5g6mwCIEsTSdnCaHk8vmCtbEJar8t28rsHl14j4tIXp2wpOJzWrX5ucHRORmo-nN0KXsqneJYt=s1600",
"https://2.bp.blogspot.com/jy4No0r47-IXxEyj3WBDM1SLzOEElU61BghXkLqV9OfKZDDClUlX1ElfE9Xl4QX6yjg1UqePfm_l=s1600",
"https://2.bp.blogspot.com/VsSfBXqZh1tSzM7yxAhUNTPwE7tc8NpDOzyqHp-1ybeE10FjwMIqezWQsDfV0b3sCaYkZqZaQ_iG=s1600",
"https://2.bp.blogspot.com/Y4WZWHEw7gQigSSQpoxXn38_NoVL4V-Uz-zv0yzMcP1g60QkYSQb4r4nAxw69PQj8SNw7GhFTqFK=s1600",
"https://2.bp.blogspot.com/GOgpmPRgVolgtmS0jNosH852ySSQdoJgEqfTIkQso2gy97epYzfkr4IQk3w0QxERjQOvk7DX8BvT=s1600",
"https://2.bp.blogspot.com/rRprTtSMmdcmxQbRyySybpApn55U8q_yB1HDalOtpKUGQ5jao-vo1oWZuJ4AiPifUHjsAnCdTBvt=s1600",
"https://2.bp.blogspot.com/ZBr9Cv69FOYbSCDNV933aO_wtl6A4PFhwKmyxWoi-2fs0ZlW1C0a9bfktVJ7eRNlr0-yFS1cLmht=s1600",
"https://2.bp.blogspot.com/F0z3vZmiYpLxoSO85orS4RX7LJWxUrhSm78yeATz2cYRGv6SKxMoAwaObWSPdH9n3Kl6dwFRBFqM=s1600",
"https://2.bp.blogspot.com/N7VMhFjyhBc-pDXxkZfWn3QHkPa8ypq7EQN-3z2O0Z0Ic7gwoEQCISrydEzHNH3uX-oLWXuP5ibd=s1600",
"https://2.bp.blogspot.com/SfJd9oPMSw8oaFgz29EhDKewCrajCu3DeUs9D8S0CgYEPHdSw-sgZyl2hIuD76U5R5r9zB9jlxYh=s1600",
"https://2.bp.blogspot.com/AElSmpaarbhCsyrcfSTaeSlaYxrxFOhAmJGxT-91tjmKjKrV8IAd9QwsbVp67Tr2VWSbWfuTwUQ4=s1600",
"https://2.bp.blogspot.com/n8U66bHJWEiiN-wegmChUqlaV1jRN_OE8kq36f7K_ajt3VJj4kNwBaov1QAZCWSmeZLqwu-G9mid=s1600",
"https://2.bp.blogspot.com/H6jyAezGEOyvPyWUy9SkhcHNi91Hwj6gfOiDuE8fo4NsMYzOs5m51U9LY1YZVsqmY9_89qoe_Oqq=s1600",
"https://2.bp.blogspot.com/wbcz0RrRWnpcrvYtkfpGNmElfv5YJlMNe8mDq7xdBk5RK8HS3XGDtT0jmyXnmMXpFUedANY7AGaG=s1600",
"https://2.bp.blogspot.com/Nrz1keQ7iKKnE1AuT9pIZ_k19_UuhUn_jBJ3NSOlJaCUGGG-nMn0Ye4fx-8n5WnumYR9xcOZ4y2f=s1600",
"https://2.bp.blogspot.com/C34ZyY1ignl7f-E-xzQySDx1ApLjp39TTsqL7BEOdTh7ksK80DE3nEMWnyiU0PRGY-978f0b3xFt=s1600",
"https://2.bp.blogspot.com/4aMVOZhM4EaOmPFNuLKBKO8uB9eoYazy2bTODgUo5TYuLQEBao3cP5gmMLqwD__OO8l0P_sgxwCY=s1600",
"https://2.bp.blogspot.com/rZuLGoG9oHwlwm1WhSNrKLwTRwKf7WWSlWWK7HNh-oWWnlyHEd93WRisA5tWVNrDmECuISGRsFOA=s1600",
"https://2.bp.blogspot.com/a3HUYqN2z0vqJevf0gQPN29bj-769bZz6hp5XOndO3oC8UsBAcZCqkEolG_lee4pkElVGTpEhaLl=s1600",
"https://2.bp.blogspot.com/QItUMs1eTRiaIyoG52nrq38eYWn21OYhm7myCmBDOxbWiai92q2MauTJbUoRbamspl5YCWuO7MjJ=s1600",
"https://2.bp.blogspot.com/RblJtnhuan1KJDHhKRaJQW0_U0GrjVd8ASwAwqHWavKy2scpvAasc2GinnSG5KzBz9tuEIbe9Xro=s1600",
"https://2.bp.blogspot.com/dA4m0qbgKYBvHJ1vM3nZFEJAoaAwccl6tkE559ZZM6o0eFew9diJ5fueUd54HUR2MQASqvAMwHZg=s1600",
"https://2.bp.blogspot.com/7VHMG7E23W0bUJORmJThB91-6SFl0c-62tmYa1WUkfwQjf-WiLyZzOeCi79pV9vsHdOvIlVo9vnk=s1600",
"https://2.bp.blogspot.com/0I6Z342BWhNnHKOeawW_5r5yRFHaqcQPkPksaVLenD1_qykvBvnpg3w6LdikJzQQE4SUwbYl-AbK=s1600",
"https://2.bp.blogspot.com/JWSNdLvn68r7OWuslPqnvPbX_BoT0vvjSolIKw3lMI_uHI_ZAWzK374W-Y6Oit_RUVyewKu7g47H=s1600",
"https://2.bp.blogspot.com/xkekPCeEH4019W2optRgS908aRbfuRVN6--9WdvAfeL8hXB6vw27BmSTlyrY4RcSID0qsumgbxXp=s1600",
"https://2.bp.blogspot.com/hWpkt8lgmrlCPzB3vRNziLTBs5cDf53hcojgb_OmhjkiCQZjHcRj8S-IjSy_2-YXcW43A6Jb-co5=s1600",
"https://2.bp.blogspot.com/E3toRjiCF3XXuDtXvdjcDcuYbXuShfyDdIF6vDgjXLq8n9vFJfZYvw5x3qx5fmV633K7P95OeyoK=s1600",
"https://2.bp.blogspot.com/26ccyRyRbe1uV0euEZn0nwsrSd9xvRHCBLSoe8ZPK1WhD9_H7dEvxk72qcReeGIaLYta0KCUgj-w=s1600",
"https://2.bp.blogspot.com/9D7UT4yXo3L2QA-vpIk9v7N15-uRwfVK78nvBDIwAOWJfxDA0RjzK9mW-4jf8Iz3DHJTkARiOQXZ=s1600",
"https://2.bp.blogspot.com/ueamScBpwWprSGStclxyzp-fVIpCrHp7EpHA3GIBDqcBcz0z3h1eX9bmhZSD6E0ilHBEvDYJ-Ip0=s1600",
"https://2.bp.blogspot.com/M6Cn4TqznR6cNk2--CUDP26WPg81MgGLNToGMKSxWTe2tDLR5ITcSD_SQrMA9kOWrhFxxeyqfCc3=s1600"
];

module.exports = function(gulp) {
    let remoteSrc = require('gulp-remote-src');

    return remoteSrc(lstImages, {
        base: null
    }).pipe(gulp.dest('../public/assets/downloads/'));
};
