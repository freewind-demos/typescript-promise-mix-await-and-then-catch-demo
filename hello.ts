async function myPromise(throwError: boolean): Promise<number> {
  if (throwError) throw new Error('my error');
  return 100;
}

async function hello(num: number): Promise<void> {
  console.log('### hello: ', num);
}

async function main() {
  hello(await myPromise(false));
  hello(await myPromise(false).then(x => x * 2));
  hello(await myPromise(true).then(x => x * 3).catch(error => {
    console.error(error)
    return 0;
  }));
  try {
    hello(await myPromise(true).then(x => x * 4).catch(error => {
      console.error(error)
      throw error;
    }));
  } catch (error) {
    console.error('### catch error from outside', error);
  }
}

main();

