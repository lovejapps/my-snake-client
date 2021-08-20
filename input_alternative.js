let connection
const handleUserInput = (key) => {
    if (key === '\u0003') {
        process.exit();
    }
    if (key === 'i') {
    connection.write("Move: up");
    }
    if (key === 'j') {
    connection.write("Move: left");
    }
    if (key === 'l') {
    connection.write("Move: right");
    }
    if (key === 'k') {
    connection.write("Move: down");
    }
    if (key === 'g') {
    connection.write("Say: GO!");
    }
    if (key === 'y') {
    connection.write('Say: WIN');
    }
}
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
    const stdin = process.stdin;
    connection = conn
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  }

  module.exports = { setupInput }