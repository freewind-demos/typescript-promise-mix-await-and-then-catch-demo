async function myPromise(throwError: boolean): Promise<number> {
  if (throwError) throw new Error('my error');
  return 100;
}

async function hello(num: number): Promise<void> {
  console.log('### hello: ', num);
}

async function main() {
  hello(await myPromise(false).then(x => x * 2));
  hello(await myPromise(true).then(x => x * 2).catch(error => {
    console.error(error)
    return 0;
  }));
}

main();

