   M S B A M L   `   `   `  ����B  >WpfApp2, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:WpfApp2WpfApp2  5   	       WpfApp2.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:WpfApp2     5   	     � Title$  
MainWindow��5   	   $	��450��6   $	��800��6)   .��5	      �  � RowDefinitions 5
   
   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   � $��2��6   $��0,0,10,0q�6%   $��5��67   ��5      �� 5       �� ImageSource$( "C:\Users\strangerts\Desktop\bg.jpg��6   5      �� 5   
   $*��$C:\Users\strangerts\Desktop\icon.png��6   $��167,20,129,356q�6>   $��5��6V   �� 5   
   $��Online Learning Platform��6   $��20(�63   $��2��6A   $��256,34,144,356q�6U   $��4��6m   �� 5   
   -   5        $��UsernameTextBox��5      $
��Left=�6+   $	��Top=�6F   $��245,152,0,0q�6^   $	��200��6s   $��4��6   $��2��6�   ���	#FFE8E4E4$��Enter Your User Name��6�    J� RenderTransformOrigin$	 1,1&�6�   $��23��6�   �� 5#   
   -   5        $��PasswordBox��5#      $��Enter Your Password��6%   $
��Left=�6A   $	��Top=�6\   $��245,194,0,0q�6t   $	��200��6�   $��4��6�   $��2��6�   �� 5&   
   $��Login��6   $
��Left=�6!   $	��Top=�6<   $	��100��6T   $��290,248,0,0q�6`   $��4��6u   �� 5)   
   $��Forgot Password?��6   $
��Left=�6,   $	��Top=�6G   
����  �$��352,213,0,0q�6q   $��4��6�    � Cursor$
 Hand��6�   $��2��6�   �� 5+   
   $��Sign Up��6   $
��Left=�6#   $	��Top=�6>   
����  �$��4��6h   $
 Hand��6u   $��317,271,0,0q�6�   5,      5-      