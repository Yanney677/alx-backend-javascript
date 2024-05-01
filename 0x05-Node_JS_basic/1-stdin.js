process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chus = process.stdin.read();
  if (chus !== null) {
    process.stdout.write(`Your name is: ${chus}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
