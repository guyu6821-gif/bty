module.exports = {
  apps: [
    {
      name: 'webapp-preview',
      script: 'python3',
      args: '-m http.server 3000 --bind 0.0.0.0',
      cwd: '/home/user/webapp',
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true
    }
  ]
}
