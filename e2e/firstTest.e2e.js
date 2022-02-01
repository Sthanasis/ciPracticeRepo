describe('First test', () => {
  beforeEach(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });
  it('should find the send button and tap it', async () => {
    await element(by.id('sendButton')).tap();
  });
});
