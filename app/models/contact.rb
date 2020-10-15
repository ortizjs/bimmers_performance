class Contact < MailForm::Base
    attribute :name, :validate => true
    attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
    attribute :message
    attribute :nickname, :captcha => true
    def headers
        {
            :subject => "Contact Inquiry",
            :to => "jonnatano94@gmail.com",
            :from => %("#{name}" <#{email}>)
        }
    end
end