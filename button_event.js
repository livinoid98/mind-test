const mainButton = document.querySelector('.main-button');
const mainButtonText = document.querySelector('.main-button-text');

const urlButton = document.querySelector('.url-link-copy-button');

mainButton.addEventListener('mouseover', function(){
    mainButtonText.style.color = "#04232D";
});

mainButton.addEventListener('mouseout', function(){
    mainButtonText.style.color = "#fff";
});

function copy(){
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = 'http://www.cheremimaka.com/sex_mind_test/';

    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('섹스 성향 테스트 링크를 복사했습니다. 결과가 노출되지 않습니다. 친구나 애인과 함께 공유해보세요. 😉');
}