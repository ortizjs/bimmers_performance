class VisitorMailer < ApplicationMailer
    default from: 'visitor_mailer_1@bimmers_performance.com'

    def  contact_us_email(visitor)
        @visitor = visitor
        # @url = "saulortiz40@gmail.com"
        @special_message = @visitor.email_body
        mail(to: "saulortiz40@gmail.com", subject: @visitor.email_subject)
    end
end

