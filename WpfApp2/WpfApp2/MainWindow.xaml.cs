using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.X86;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp2
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private database db = new database();


        private void Registerpath(object sender, RoutedEventArgs e)
        {
            Window1 Register = new Window1();
            Register.Show();
            Close();


        }

        private void Signin(object sender, RoutedEventArgs e)
        {


            string Username = Username1.Text;

            string Password = PasswordBox.Password;
            var user = db.Information.FirstOrDefault(u => u.Username == Username);
            if (user == null)
            {
                // User not found
                MessageBox.Show("Registration number not found. Please sign up.");
            }
            else if (user.Password != Password)
            {
                // Password does not match
                MessageBox.Show("Invalid password. Please try again.");
            }
            else if (Password == null || Username == null)
            {
                MessageBox.Show("Invalid Login Please Try Again ");
            }
            else
            {
                selection Select = new selection();
                Select.Show();
                Close();
            }
        }
    }
}
