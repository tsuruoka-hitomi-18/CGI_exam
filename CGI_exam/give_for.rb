require 'cgi'
cgi = CGI.new
cgi.out("type" => "text/html", "charset" => "UTF-8"){
  get = cgi['give']
  "<html>
    <body>
      <P>譲渡先のデータは下記になります</p>
      <p>文字列 : #{get}</p>
    </body>
   </html>"
}
