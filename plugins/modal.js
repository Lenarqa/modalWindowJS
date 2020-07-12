Element.prototype.appendAfter = function(element){
    element.parentNode.insertBefore(this, element.nextSibling);
}

function _createModelFooter(btns = []){
    if(btns.length = 0){
        return document.createElement('div');
    }
    
    const wrap = document.createElement('div');
    wrap.classList.add('modal-footer');
    


    return wrap;
}

function _createModel(option){
    const default_width = '600px'
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modalOverlay" data-close="true">
            <div class="modal-window" style="width: ${option.width || default_width}">
                <div class="modal-header">
                    <span class="modal-title">${option.title || 'Window'}</span>
                    ${option.clousable ? `<span class="modal-close" data-close="true">&times</span>` : ''}
                </div>
                <div class="modal-content" data-content>
                    ${option.content || ''}
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
    let destroyed = false;
    
    const $footer = _createModelFooter(options.footerBtns);
    $footer.appendAfter(document.querySelector('[data-content]'));
    
    const modal = {
        open(){
            if(destroyed){
                return console.log("Modal is destroyed");
            }
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
        }
    }

    const listener = event =>{
        if(event.target.dataset.close){
            modal.close();
        }

    }

    $modal.addEventListener('click', listener)

    let clousing = false;
    
    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal);
            $modal.removeEventListener('click',listener);
            destroyed = true;
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html;
        }
    });
};