- install nvm

  ```
    # Install nvm if you haven't
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    # Restart your shell or source your profile
    source ~/.bashrc  # or ~/.zshrc

    # Install a newer Node version
    nvm install 20

    # Use it
    nvm use 20
  ```

- create react proj

  ```
  npm create vite@latest app
  cd app
  npm install
  npm run dev
  ```
