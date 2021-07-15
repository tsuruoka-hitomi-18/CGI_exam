$(document).ready(function () {
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                         ];
    let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
  　  let num = subject_points.length;
      let average = (sum/num);
    $('#average_indicate').text(average);
  };
  function get_achievement() {
    let averageIndicate = $("#average_indicate").text();
    console.log()
    if (averageIndicate >= 80) {
      return "A";
    }
    else if (averageIndicate <80 && averageIndicate >= 60) {
      return "B";
    }
    else if (averageIndicate <60 && averageIndicate >=40) {
      return "C";
    }
    else {
      return "D";
    }
  };
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                         ];
    let number = subject_points.length;
    let judge = "合格";
    for(let i = 0; i <number; i++){
      if(subject_points[i] < 60 ){
        judge = "不合格";
        break;
       }
     }
    return judge;
      }
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
  $('#btn-declaration').click(function () {
    $("#alert-indicate").remove();
    function judgement(){
      let achievement = get_achievement();
      let pass_or_failure = get_pass_or_failure();
      $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
    };
    judgement();
  });
});
