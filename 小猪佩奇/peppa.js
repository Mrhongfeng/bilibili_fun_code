const str = " .|/=\\|/=\\| @!";

function c(x, y, r) {
  return Math.sqrt(x * x + y * y) - r;
}

function u(x, y, t) {
  return x * Math.cos(t) + y * Math.sin(t);
}

function v(x, y, t) {
  return y * Math.cos(t) - x * Math.sin(t);
}

function fa(x, y) {
  return Math.min(c(x, y, 0.5), c(x * 0.47 + 0.15, y + 0.25, 0.3));
}

function no(x, y) {
  return c(x * 1.2 + 0.97, y + 0.25, 0.2);
}

function nh(x, y) {
  return Math.min(c(x + 0.9, y + 0.25, 0.03), c(x + 0.75, y + 0.25, 0.03));
}

function ea(x, y) {
  return Math.min(c(x * 1.7 + 0.3, y + 0.7, 0.15), c(u(x, y, 0.25) * 1.7, v(x, y, 0.25) + 0.65, 0.15));
}

function ey(x, y) {
  return Math.min(c(x + 0.4, y + 0.35, 0.1), c(x + 0.15, y + 0.35, 0.1));
}

function pu(x, y) {
  return Math.min(c(x + 0.38, y + 0.33, 0.03), c(x + 0.13, y + 0.33, 0.03));
}

function fr(x, y) {
  return c(x * 1.1 - 0.3, y + 0.1, 0.15);
}

function mo(x, y) {
  return Math.max(c(x + 0.15, y - 0.05, 0.2), -c(x + 0.15, y, 0.25));
}

function o(x, y, f, i) {
  r = f(x, y);
  return Math.abs(r) < 0.02 ? (Math.atan2(f(x, y + 1e-3) - r, f(x + 1e-3, y) - r) + 0.3) * 1.273 + 6.5 : r < 0 ? i : 0;
}

function s(x, y, f, i) {
  return f(x, y) < 0 ? i : 0;
}

function f(x, y) {
  return o(x, y, no, 1) ? Math.max(o(x, y, no, 1), s(x, y, nh, 12)) : Math.max(o(x, y, fa, 1), Math.max(o(x, y, ey, 11), Math.max(o(x, y, ea, 1), Math.max(o(x, y, mo, 1), Math.max(s(x, y, fr, 13), s(x, y, pu, 12))))));
}


function main(n) {
  let text = '';
  for (let y = -1; y < 0.6; y += 0.05 / n) {
    text += '\n';
    for (let x = -1; x < 0.6; x += 0.025 / n) {
      text += str[parseInt(f(u(x, y, 0.3), v(x, y, 0.3)))];
    }
  }
  console.log(text);
}

main(1);