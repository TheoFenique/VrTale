
//Listeners for keydowns 
window.addEventListener('keydown', (_e) => {
    if (_e.key == 'z') {
        controlsListeners.z = 1
        window.addEventListener('keyup', (_e) => {
            if (_e.key == 'z') {
                controlsListeners.z = 0
            }

        })
    }
})
window.addEventListener('keydown', (_e) => {
    if (_e.key == 's') {
        controlsListeners.s = 1
        window.addEventListener('keyup', (_e) => {
            if (_e.key == 's') {
                controlsListeners.s = 0
            }

        })
    }
})
window.addEventListener('keydown', (_e) => {
    if (_e.key == 'd') {
        controlsListeners.d = 1
        window.addEventListener('keyup', (_e) => {
            if (_e.key == 'd') {
                controlsListeners.d = 0
            }

        })
    }
})
window.addEventListener('keydown', (_e) => {
    if (_e.key == 'q') {
        controlsListeners.q = 1
        window.addEventListener('keyup', (_e) => {
            if (_e.key == 'q') {
                controlsListeners.q = 0
            }

        })
    }
})

window.addEventListener('keydown', (_e) => {
    if (_e.key == 'Shift') {
        controlsListeners.shift = 1
        window.addEventListener('keyup', (_e) => {
            if (_e.key == 'Shift') {
                controlsListeners.shift = 0
            }
        })
    }
})

window.addEventListener('keydown', (_e) => {
    if (_e.key == 's') {
        controlsListeners.s = 1
        window.addEventListener('keyup', (_e) => {
            if (_e.key == 's') {
                controlsListeners.s = 0
            }
        })
    }
})
