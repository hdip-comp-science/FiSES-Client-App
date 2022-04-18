
<div>
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
          <h3 class="uk-card-title">Get in touch</h3>
          <p>We're not around but we still want to hear from you! <br>Leave us a note:</p>
        </div>
        <div class="uk-card-body">
          <!-- action attribute to enable submissions to be sent to email addr  -->
          <form action="https://formsubmit.co/ianhutch90@gmail.com" method="POST">
            <fieldset class="uk-fieldset">
                     
              <div class="uk-margin">
                  <label for="name">name *</label>
                  <input class="uk-input" type="name" name="name" placeholder="Enter your name..."required>
              </div>
              <input type="hidden" name="_next" value="http://localhost:3000/#/contact">
              <input type="hidden" name="_captcha" value="false">
              <div class="uk-margin">
                <label for="subject">Subject</label>
                <input class="uk-input" name="_subject" placeholder="Subject"required>
              </div>
                
              <div class="uk-margin">
                <label for="email">email *</label>
                <i class="mail icon"></i>
                <input class="uk-input" type="email" name="email" placeholder="Enter your email..." required>
              </div>
      
              <div class="uk-margin">
                <label for="message">message *</label>
                <input class="uk-input"  type="message" name="message" placeholder="write your message here" required>
              </div>
        
            </fieldset>
            <div class="uk-flex uk-flex-column uk-width-1-1">
              <button class="uk-button uk-button-primary" type="submit">Send</button>
            </div>
           
        </form>

        </div>
    </div>
</div>
