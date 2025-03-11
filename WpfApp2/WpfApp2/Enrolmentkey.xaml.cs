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
    /// <summary>
    /// Interaction logic for enrolmentkey.xaml
    /// </summary>
    public partial class enrolmentkey : Window
    {
        private const String CorrectKey = "1234";
        public enrolmentkey()
        {
            InitializeComponent();
        }
        private void EnrolmentKey_TextChanged(object sender, TextChangedEventArgs e)
        {
            // Display the entered text in the console (for testing)
            Console.WriteLine("Text changed: " + EnrolmentKey.Text);
        }


        private void Submit_Click(object sender, RoutedEventArgs e)
        {
            String EnteredKey = EnrolmentKey.Text;

            if (EnteredKey == CorrectKey)
            {
                passperrecording rec = new passperrecording();
                rec.Show();
                Close();

            }
            else
            {
                MessageBox.Show("Invalid Key. Please try again.");
            }
        }
    }
}
