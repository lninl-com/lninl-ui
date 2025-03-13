/* eslint-disable no-undef */
describe('/pages/index/index', () => {
  let page
  beforeAll(async () => {
    page = await program.currentPage()
    await page.waitFor(3000)
  })

  it('title', async () => {
    page = await program.reLaunch('/pages/index/index2')
    expect(await (await page.$('.title')).text()).toContain('XX应用22')
  })
})
