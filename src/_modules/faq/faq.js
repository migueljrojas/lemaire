'use strict';

// Constructor
var Faq = function() {

    var faqs = $('.faq');

    if (faqs) {
        faqs.each(function(){
            var $this = $(this);
            var question = $this.find('.faq__question');
            var answer = $this.find('.faq__answer');
            var answerHeight = answer.outerHeight();
            answer.css('max-height', 0);

            question.on('click', function(){
                $this.toggleClass('-open');
                console.log(answerHeight);

                if ($this.hasClass('-open')) {
                    answer.css('max-height', answerHeight);
                } else {
                    answer.css('max-height', 0);
                }
            });
        });
    }
};

module.exports = Faq;
