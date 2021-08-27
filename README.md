# swed-csv-ofx
This app purpose is to import your bank account statement to [You Need a Budget](https://www.youneedabudget.com/) app (aka YNAB).
Working version is deployed [here](https://swed-ynab.herokuapp.com/), you are free to use it if you like. 
All the conversions are done in the browser, so your data won't leave your computer.

To use it you do the following:
1. Export your account statement to CSV file
2. Open CSV file with this tool
3. Download OFX file
4. Import downloaded OFX file to YNAB.

Currently it works with LTSwedbank, Revolut and N26 CSV formats. Format is detected automatically.

## Development how to
Start docker: `docker run -p 8001:8001 -it -v $(pwd):/home/boot/repo docker.io/zhilvis/boot-base bash`, start boot in dev mode: `cd repo;boot dev`

Open browser with `http://localhost:8001/` once the environment has started
