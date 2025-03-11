using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WpfApp2
{
    
    public partial class Window1 : Window
    {
        public Window1()
        {
            InitializeComponent();
        }
        private database db = new database();
        //private void Slectionpanel(object sender, TextChangedEventArgs e)
        //{ 

        //    String firstkey= Password.Text;
        //    String secondkey= Confirmpassword.Text;
        //    if (firstkey == secondkey)
        //    {
        //        User user1 = new User();

        //        user1.Username = Username.Text;
        //        user1.Password = Password.Text;
        //        db.Information.Add(user1);
        //        db.SaveChanges();
        //        MainWindow Signin = new MainWindow();
        //        Signin.Show();
        //        Close();

        //    }
        //    else
        //    {
        //        MessageBox.Show("Reenter the Password");
        //    }
        //}

        

        private void Sign_in(object sender, RoutedEventArgs e)
        {
            MainWindow Signin = new MainWindow();
            Signin.Show();
            Close();

        }

        private void Slectionpanel(object sender, RoutedEventArgs e)
        {
            String firstkey = Password.Text;
            String secondkey = Confirmpassword.Text;
            if (firstkey == secondkey)
            {
                User user1 = new User();

                user1.Username = Username.Text;
                user1.Password = Password.Text;
                db.Information.Add(user1);
                db.SaveChanges();
                MainWindow Signin = new MainWindow();
                Signin.Show();
                Close();

            }
            else
            {
                MessageBox.Show("Reenter the Password");
            }
        }
    }
}
//    selection Select = new selection();
//    Select.Show();
//    Close();