const { stdin, stdout } = process;
stdout.write("Hi, please, enter any text\n");

stdin.on("data", (data) => {

  stdout.write(data);
  process.exit();
});

