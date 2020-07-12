function _createModel(option){
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modalOverlay">
            <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">Modal-title</span>
                        <span class="modal-close">&times</span>
                    </div>
                    <div class="modal-content">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div class="modal-footer">
                        <button>ok</button>
                        <button>cancel</button>
                    </div>
            </div>
        </div>
    `);

    document.body.appendChild(modal);
    return modal;
}

$.modal = function(options){
    const ANIM_SPEED = 500;
    const $modal = _createModel(options);
    let clousing = false;
    
    return {
        open(){
            !clousing && $modal.classList.add('open');
        },
        close(){
                clousing = true;
                $modal.classList.remove('open');
                $modal.classList.add('hide');
                setTimeout(() => {
                    $modal.classList.remove('hide');
                    clousing = false;
                }, ANIM_SPEED)
        },
        destroy(){

        }
    }
};