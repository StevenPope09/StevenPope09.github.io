<?
class apiModel{

    public function __construct($parent){
        $this->db = $parent->db;
    }

    public function catApi(){

        $url = "https://api.thecatapi.com/v1/breeds?limit=40";
        
        // options is for header information when making API call. The site required a header with the API key in it
        $options = [
            "http" => [
                "method" => "GET",
                "header" => "x-api-key: f474c959-1c0b-4090-805d-13b77663b36d\r\n"
            ]
        ];

        $context = stream_context_create($options);
      	
      	$response = file_get_contents( $url, false, $context );
        $results = json_decode($response);
        //var_dump( $results );


		
      	
        return $results;
    }
}



?>