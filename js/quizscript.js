$.getJSON("제주속담사전.json", function(json) {
 
  
  $('#quiz').quiz({
    
 
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  

  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': '1. 제주 사투리 ‘하르방’의 뜻은 무엇인가요?',
      'options': [
        '할아버지',
        '할머니',
        '아저씨',
        '아줌마'
        
      ],
      'correctIndex': 0,
      'correctResponse': '정답',
      'incorrectResponse': '..'
    },
    {
      'q': '‘많이’라는 뜻을 가지고 있는 제주 사투리는 무엇인가요? ',
      'options': [
        '이영',
        '우영',
        '하영'
      ],
      'correctIndex': 2,
      'correctResponse': '정답',
      'incorrectResponse': '..'
    },
    {
      'q': '제주도 인사 중 하나인 ‘혼저 옵서’에서 혼저의 뜻은 무엇인가요?',
      'options': [
        '어서',
        '아서'
      ],
      'correctIndex': 0,
      'correctResponse': '정답',
      'incorrectResponse': '..'
    },
    {
      'q': '제주 사투리 ‘도새기’ 의 뜻은 무엇인가요?',
      'options': [
        '파새기',
        '돼지',
        '소'
      ],
      'correctIndex': 1,
      'correctResponse': '정답',
      'incorrectResponse': '..'
    }
  ]
});
});
 