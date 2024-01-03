(() => {

    const stepElems = document.querySelectorAll('.step')
    const graphicElems = document.querySelectorAll('.graphic-item')
    let currentItem = graphicElems[0]; //현제 활성화된(visible 클래스가 붙은) .graphic-item을 지정

    for(let i=0; i < stepElems.length; i++){
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activate(){
        currentItem.classList.add('visible')
    }

    function inactivate(){
        currentItem.classList.remove('visible')
    }

    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;

        for(let i=0; i < stepElems.length; i++){
            step = stepElems[i];
            boundingRect = step.getBoundingClientRect();

            if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8){

                inactivate();
                currentItem = graphicElems[step.dataset.index];
                activate();
            }
        }

    })

    activate();

})();