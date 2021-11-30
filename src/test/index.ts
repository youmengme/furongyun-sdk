import { FuRong } from '../index'

const furong = new FuRong()

async function main() {
  const login = await furong.login('username', 'pwd')
  console.log('login', login)
  const mobileInfo = await furong.getMobile({
    project_id: '11111'
  })
  console.log('mobile', mobileInfo)
}

main()