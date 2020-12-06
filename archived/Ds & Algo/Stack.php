<?php

// stack - LIFO

class Stack{
    protected $data = [];
    protected $limit ;
    public function __construct($limit = 5){
        $this->limit = $limit ;
        // $this-> =  ;
    }

    public function push($item){
        if($this->is_full()){
            echo "Stack is full - can't insert => \"$item\" \n";
        }else{
            return array_unshift($this->data, $item);
        }

    }
    public function pop(){
        if($this->is_empty()){
            echo "Stack is empty";
        }else{
            return array_shift($this->data);
        }
    }
    public function data(){
        return $this->data;
    }

    protected function is_empty(){
        if(count($this->data) <= 0){
            return true;
        }
        return false;
    }
    protected function is_full(){
        if(count($this->data) >= $this->limit){
            return true;
        }
        return false;
    }
}


$foo = new Stack();
$foo->push('hello');
$foo->push('umesh');
$foo->push('kadam');
$foo->push('How');
$foo->push('are');

$foo->pop();
$foo->push('you ?');






for($i = 0; $i < count($foo->data()); $i++){
    echo $foo->data()[$i] . "\n";    
}
















?>
