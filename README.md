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

## 引用

[使用Github Actions自动化发布npm包的探索](https://www.cnblogs.com/xueyubao/p/14823168.html)
[官方文档](https://www.showdoc.com.cn/1598819599478624/7605738097566749)