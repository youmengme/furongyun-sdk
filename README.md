## Install 
```bash
yarn add furongyun
```

## Example
```typescript
import { FuRong } from 'furongyun'

const furong = new FuRong()

const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))

async function main() {
  await furong.login('username', 'password')
  const mobileInfo = await furong.getMobile({
    project_id: '128807'
  })
  console.log('mobileInfo', mobileInfo)
  let i = 0
  const timer = setInterval(async () => {
    if (i >= 10) {
      clearInterval(timer)
      return
    }
    const messageInfo = await furong.getMessageCode({
      project_id: '128807',
      phone_num: mobileInfo?.mobile!
    })
    console.log('messageInfo', messageInfo)
    i++
  }, 3000)

  const releaseInfo = await furong.releaseMobile({
    project_id: '128807',
    phone_num: mobileInfo?.mobile!
  })
  console.log('releaseInfo', releaseInfo)
}
main()
```