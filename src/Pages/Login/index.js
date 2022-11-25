
import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import auth from "../../Services/authService";
import { NavLink, useHistory } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import "./index.css";

import useLocalStorage from "use-local-storage";

const Login = () => {
 
  const [loading, setLoading] = useState(false);
  const [Refrech, setRefresh] = useState(false);

  const [token, setToken] = useLocalStorage("token", null);

  const login = async (data) => {
    setLoading(true);
    auth
      .loginUserApi(data)
      .then(({ data }) => {
        setToken(data.token);
      
      }) 
      .catch((err) => {
        setToken(null);
        if (err?.response?.data?.error) {
          message.error({
            content: err.response.data.error,
            duration: 3,
          });
        } else {
          message.error({
            content: "Erreur de serveur",
            duration: 3,
          });
        }
      })
      .finally(() => setLoading(false));
  };
  const onFinish = (data) => {
    login(data);
   
  };
 
  console.log(token)
 

  return (
    <div className="login">
          {token!==null ? (
      <script>
      
      function setCurrentLocation() {

         
          window.location.href = "/crud_personne"
      }
  </script>
      ) :(
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <br />
       
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "email est requis",
            },
            {
              type: "email",
              message: "email n'est pas valide",
            },
          ]}
        >
          <Input
            data-testid="emailInput"
            size="large"
            prefix={
              <MailOutlined
                className="site-form-item-icon"
                style={{ marginRight: "5px" }}
              />
            }
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "mot de passe est requis",
            },
            {
              min: 6,
              message: "mot de passe doit comporter au moins 6 caractères",
            },
          ]}
        >
          <Input.Password
            data-testid="PasswordInput"
            size="large"
            prefix={
              <LockOutlined
                className="site-form-item-icon"
                style={{ marginRight: "5px" }}
              />
            }
            type="password"
            placeholder="mot de passe"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
       
        </Form.Item>
      </Form>   )}
    </div>
 

  );
};


export default Login;
