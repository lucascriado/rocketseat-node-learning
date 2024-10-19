// stream para leitura
// process.stdin.pipe(process.stdout);

import { Readable } from 'stream';

class OneToHundredStream extends Readable {
    index = 1
    
    _read() {
        const i = this.index++

        // if(i > 100) {
        //     this.push(null)
        // } else {
        //     // streams só são aceitos buffers
        //     // buffer não são aceitos números por isso é interessante convertelos para string
        //     const buf = Buffer.from(String(i))

        //     this.push(i)
        // }


        // Adicionando um timeout, a nossa stream

        setTimeout(() => {
            if(i > 100) {
                this.push(null)
            } else {
                // streams só são aceitos buffers
                // buffer não são aceitos números por isso é interessante convertelos para string
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000)
    }
}

new OneToHundredStream()
    .pipe(process.stdout)