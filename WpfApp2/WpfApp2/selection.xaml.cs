﻿using System;
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
    /// Interaction logic for selection.xaml
    /// </summary>
    public partial class selection : Window
    {
        public selection()
        {
            InitializeComponent();
        }

        private void passpaperenrol(object sender, RoutedEventArgs e)
        {
            enrolmentkey enrol = new enrolmentkey();
            enrol.Show();
            Close();
        }
    }
}
