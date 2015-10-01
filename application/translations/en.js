application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.translations('en', {
            
            'action_add_person': 'Add Friend',
            'action_back': 'Back',
            'action_comment': 'Comment',
            'action_details': 'Details',
            'action_email': 'Email',
            'action_menu': 'Menu',
            'action_message': 'Messages',
            'action_notifications': 'Notifications',
            'action_person': 'Person',
            'action_reset': 'Reset',
            'action_search': 'Search',
            'action_shopping_cart': 'Shopping Cart',
            
            'title_add_friend': 'Add Friends',
            'title_chatters': 'Chatters',
            'title_message': 'Messages',

            'toast_incorrect_credentials': 'The user credentials is incorrect.',
            'toast_invalid_refresh_token': 'The refresh token is invalid.',
            'toast_method_not_allowed': 'Request to the resource is not allowed.',
            'toast_validation_failed': 'Validation failed on server.',

            'validation_maxlength_24': 'This field may not be greater than 24 characters.',
            'validation_maxlength_255': 'This field may not be greater than 255 characters.',
            'validation_maxlength_40': 'This field may not be greater than 40 characters.',
            'validation_minlength_4': 'This field must be at least 4 characters.',
            'validation_required': 'This field is required.',
        });
    }]);
