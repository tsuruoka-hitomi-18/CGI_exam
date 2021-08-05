# データを受け取り、返却するCGIプログラムの起動
require 'cgi'
cgi = CGI.new
# データを受け取った後、HTMLの形式でレスポンスを返す
cgi.out("type" => "text/html", "charset" => "UTF-8") {
  # 情報の目印とした"quality"のデータを cgi['quality']と言う記述で取り出し、ローカル変数に代入する
  get = cgi['quality']
  # HTMLでレスポンスを返却する
  "<html>
    <body>
      <p>品質が悪いもののデータは下記になります</p>
      <p>文字列：#{get}</p>
    </body>
  </html>"
}
