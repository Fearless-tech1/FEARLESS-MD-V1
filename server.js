//By:  𓄂☠️𝐅ᴇa̷r͜͡l͡e̶Ꭶs͜͡🤴🏻𝐊i͜͡n̸𝙂🇵🇰༗
//https://wa.me/50941392672
//https://github.com/Fearless-tech1
//https://whatsapp.com/channel/0029VafEg1mIyPtLXQjAbz3k
//https://chat.whatsapp.com/FrZMclZccad72BbiRlHFKa

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'index.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting FEARLESS-MD-V1...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
