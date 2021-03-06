import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    final bottomPadd = MediaQuery.of(context).viewInsets.bottom;
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Column(
        children: <Widget>[
          Image(
            image: AssetImage("assets/image/ChatME.png"),
            height: 260,
          ),
          Divider(
            color: Color.fromRGBO(55, 79, 164, 1),
            thickness: 52,
          ),
          SizedBox(
            height: 50,
          ),
          Container(
            decoration: BoxDecoration(boxShadow: [
              BoxShadow(
                spreadRadius: 3,
                blurRadius: 10,
                color: Colors.black.withOpacity(0.09),
              ),
            ]),
            child: Padding(
              padding: const EdgeInsets.only(
                left: 18,
                right: 18,
              ),
              child: Card(
                color: Colors.white,
                child: Padding(
                  padding: const EdgeInsets.only(
                    top: 14,
                    bottom: 14,
                    right: 28,
                    left: 28,
                  ),
                  child: Column(
                    children: <Widget>[
                      Column(
                        children: <Widget>[
                          Row(
                            children: <Widget>[
                              Text(
                                "USUÁRIO",
                                style: TextStyle(
                                  fontSize: 15,
                                  letterSpacing: 1,
                                  fontWeight: FontWeight.w600,
                                  fontFamily: "Open Sans",
                                ),
                              ),
                            ],
                          ),
                          SizedBox(
                            height: 8,
                          ),
                          Container(
                            height: 40,
                            child: TextField(
                              decoration: new InputDecoration(
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.all(
                                    Radius.circular(55),
                                  ),
                                  borderSide: BorderSide(
                                    color: Color.fromRGBO(0, 82, 192, 1),
                                    width: 0.9,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 22,
                      ),
                      Column(
                        children: <Widget>[
                          Row(
                            children: <Widget>[
                              Text(
                                "SENHA",
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.w600,
                                  letterSpacing: 1,
                                  fontFamily: "Open Sans",
                                ),
                              ),
                            ],
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Container(
                            height: 40,
                            child: TextField(
                              decoration: new InputDecoration(
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.all(
                                    Radius.circular(55),
                                  ),
                                  borderSide: BorderSide(
                                    color: Color.fromRGBO(0, 82, 192, 1),
                                    width: 0.9,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 34,
                      ),
                      Column(
                        children: <Widget>[
                          SizedBox(
                            width: double.infinity,
                            child: RaisedButton(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(55),
                              ),
                              onPressed: () {},
                              child: Text(
                                "ENTRAR",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 17,
                                  letterSpacing: 1.5,
                                  fontFamily: "Open Sans",
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              color: Color.fromRGBO(0, 82, 129, 1),
                            ),
                          ),
                          SizedBox(
                            width: double.infinity,
                            child: RaisedButton(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(55),
                              ),
                              onPressed: () {
                                Navigator.pushNamed(context, '/signup');
                              },
                              child: Text(
                                "CRIAR CONTA",
                                style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 17,
                                  letterSpacing: 1.1,
                                  fontFamily: "Open Sans",
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              color: Color.fromRGBO(146, 191, 118, 1),
                            ),
                          )
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          )
        ],
      ),
      backgroundColor: Theme.of(context).primaryColor,
    );
  }
}
