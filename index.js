const fs = require('fs');

// Create Component -- Custom Command
var config = {
  description:
    'Creates a new fractal component directory and files in the current directory',
};

const configSample = `module.exports = {
  label: 'COMPNAME',
  context: {
    data: {
      prop: ''
    }
  }
}`;
const twigSample = `<div class="COMPNAME"></div>`;
const sassSample = `.COMPNAME {}`;

function createComponent(args, done) {
  const app = this.fractal;
  const dir = './' + args.compName;
  const configFileName = dir + '/' + args.compName + '.config.js';
  const sassFileName = dir + '/' + args.compName + '.scss';
  const twigFileName = dir + '/' + args.compName + '.twig';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.writeFileSync(
      configFileName,
      configSample.replace('COMPNAME', args.compName),
      err => {
        if (err) throw err;
      }
    );
    fs.writeFileSync(
      sassFileName,
      sassSample.replace('COMPNAME', 'c-' + args.compName),
      err => {
        if (err) throw err;
      }
    );
    fs.writeFileSync(
      twigFileName,
      twigSample.replace('COMPNAME', 'c-' + args.compName),
      err => {
        if (err) throw err;
      }
    );
  } else {
    console.warn('\x1b[31m', 'Component directory already exists', '\x1b[0m');
  }

  done();
}

function init(fractal) {
  fractal.cli.command('create-component <compName>', createComponent, config); // register the command
  fractal.cli.command('cc <compName>', createComponent, config); // register the command
}

exports.init = init;
