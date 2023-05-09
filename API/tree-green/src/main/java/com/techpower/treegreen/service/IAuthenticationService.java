package com.techpower.treegreen.service;

import com.techpower.treegreen.api.input.InputRegistrationSeller;
import com.techpower.treegreen.api.input.InputRegistrationUser;
import com.techpower.treegreen.api.input.InputAuthentication;
import com.techpower.treegreen.api.output.OutputAuthentication;

public interface IAuthenticationService {
    public OutputAuthentication authenticate(InputAuthentication request);

    public OutputAuthentication registerUser(InputRegistrationUser request);

    public OutputAuthentication registerSeller(InputRegistrationSeller request);
}
