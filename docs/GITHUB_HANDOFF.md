# GitHub handoff

A dedicated branch was created from `main`:

`redesign/editorial-business-portfolio`

The branch is currently a clean copy of `main`. The redesign files in this bundle have not been committed to GitHub from this environment. Use the steps below to place the bundle on that branch without changing `main`.

## Windows PowerShell

1. Clone the repository and switch to the prepared branch:

```powershell
git clone https://github.com/himanshupal2005/Himanshu-Portfolio.git
cd Himanshu-Portfolio
git fetch origin
git switch --track origin/redesign/editorial-business-portfolio
```

2. Extract `Himanshu_Pal_Portfolio_Redesign.zip` to a temporary folder. Copy the *contents* of the extracted `Himanshu_Pal_Portfolio_Redesign` folder into the repository root, allowing the matching files to be replaced. Do not delete unrelated files from the repository.

```powershell
Copy-Item -Path "C:\path\to\Himanshu_Pal_Portfolio_Redesign\*" -Destination . -Recurse -Force
```

3. Install, preview and build:

```powershell
npm install
npm run dev
npm run build
```

4. Commit and push the completed branch:

```powershell
git add -A
git commit -m "Build editorial business and analytics portfolio"
git push -u origin redesign/editorial-business-portfolio
```

Then open a pull request from `redesign/editorial-business-portfolio` into `main` after reviewing the site.

## macOS / Linux

After extracting the archive to a temporary folder and switching to the branch:

```bash
cp -R /path/to/Himanshu_Pal_Portfolio_Redesign/. .
npm install
npm run dev
npm run build
git add -A
git commit -m "Build editorial business and analytics portfolio"
git push -u origin redesign/editorial-business-portfolio
```

The copy step overlays the redesign's tracked files and leaves unrelated repository assets in place.
