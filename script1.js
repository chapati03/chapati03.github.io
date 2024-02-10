document.addEventListener('DOMContentLoaded', function() {
    const buttonTextArray = ['are you sure?', 'please?', 'mala heartbreaker:(','rim convince her','No still?' ,' Last chance aad Poppy convince her','hata poppy lee' ,'PLEASEEE PLEAAASEE (with rizz)','Now you have a sad chapati:(','Mala hagara','wbgdsqhdoustcfvwrrsbEF!'];
    const dynamicButton = document.getElementById('dynamicButton');
    const yesButton = document.getElementById('yesButton');
    let currentIndex = 0;
    let fontSize = 16;
  
    function updateButtonText() {
      dynamicButton.textContent = buttonTextArray[currentIndex];
      currentIndex = (currentIndex + 1) % buttonTextArray.length;
    }

    function increaseFontSize() {
        fontSize += 20; 
        yesButton.style.fontSize = `${fontSize}px`; 
      }
  
    dynamicButton.addEventListener('click', updateButtonText);
    document.getElementById('dynamicButton').addEventListener('click', increaseFontSize);

});
  